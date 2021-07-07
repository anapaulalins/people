import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { View, RefreshControl, ActivityIndicator, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
import { FlatList} from 'react-native'
import { 
    Container, 
    Header,
    Input,
    InputView,
    Title, 
    PlaceContainer, 
    PlaceTitle,
    PlaceButton,
    PlaceButtonTitle,
    Content,
    Card,
    CardTitle,
    ImageCard,
    CardContent,
    TextLocation
} from './styles'
import { colors } from '../../themes/colors'
import { useNavigation } from '@react-navigation/native'

interface PropsUser{
    name:{
        first: string,
        last: string
    },
    location: {
        city: string,
        state: string
        country: string,
    }
   email: string,
   login: {
        uuid: string,
        username: string,
    },
    phone: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string,
    }
  
}


const Home: React.FC = () => {

    const [nat, setNat] = useState('all')
    const [listUser, setListUser] = useState<PropsUser[]>([])
    const [listUserAll, setListUserAll] = useState<PropsUser[]>([])
    const [refreshing, setRefreshing] =  useState(false)
    const [searchText, setSearchText] = useState('');
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(1)

    const navigation = useNavigation()

    const natArray = [
        {key: 'all', title: 'All'},
        {key: 'br', title: 'Brazil'},
        {key: 'fr', title: 'France'},
        {key: 'us', title: 'United States'},
        {key: 'ca', title: 'Canada'},
        {key: 'es', title: 'Spain'},
    ]

    const getUsers = async () => {
        try {
            if(page === 1){
                await fetch(`https://randomuser.me/api/?page=${page}?results=8`)
                    .then(data => data.json())
                    .then(result => setListUser(result.results))
                
                await  fetch(`https://randomuser.me/api/?results=5000`)
                    .then(data => data.json())
                    .then(result => setListUserAll(result.results))
            }else{
                await fetch(`https://randomuser.me/api/?page=${page}?results=8`)
                    .then(data => data.json())
                    .then(result => setListUser(oldItem => [...oldItem, ...result.results]))

            }
        } catch (error) {
            console.log(error)
        }
    }

    const onRefresh = useCallback(() => {
        setRefreshing(false);
        getUsers()
    }, [listUser])

    const handleSearchInput = (text: string) => {
        setSearchText(text)
       if(text){
            const filtered = listUserAll.filter(({name}) => name.first.includes(text))
            setListUser(filtered)
        }
       if(!text){
           setListUser([])
           getUsers()
       }
    };

    const handleFilteredNat = (nat: {key: string, title: string}) => {
        setNat(nat.key)
        if (nat.key == 'all')
            getUsers()

        const filtered = listUserAll.filter(user =>
            user.location.country.includes(nat.title)
        );

        setListUser(filtered)
    }

    const loadMore = () => {
        setLoadingMore(true);
        setPage(page + 1)
    }

    useEffect(() => {
        getUsers()
    }, [page])

    return (
        <Container>
                <Header>
                    <Title>
                        Connect to people
                    </Title>
                    <InputView>
                        <Icon name="search" size={20} color="#bbb9b9"/>
                        <Input
                            value={searchText}
                            onChangeText={text => handleSearchInput(text)} 
                            placeholder="Search" 
                            placeholderTextColor="#bbb9b9" />
                    </InputView>
                </Header>
                <PlaceContainer>
                    <PlaceTitle>Choose a country</PlaceTitle>
                    <View style={{flex: 1}}>
                        <FlatList 
                            refreshControl={
                                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                            }
                            data={natArray}
                            keyExtractor={item => item.key}
                            renderItem={({item}) => (
                                <PlaceButton active={item.key === nat} onPress={() => handleFilteredNat(item)}>
                                    <PlaceButtonTitle active={item.key === nat}>{item.title}</PlaceButtonTitle>
                                </PlaceButton>
                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{paddingRight: 25, marginLeft: 10}}
                        />
                    </View>
                </PlaceContainer>
                <Content>
                    {listUser && (
                        <FlatList
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                            data={listUser}
                            keyExtractor={item => item.login.uuid}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) => (
                                <Card>
                                    <ImageCard source={{uri: item.picture.large}} />
                                   <CardContent>
                                        <CardTitle>{item.name.first}</CardTitle>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Icon1 name="location" size={30} color={colors.greenPrimary} />
                                            <View>
                                                <TextLocation>{item.location.city},</TextLocation>
                                                <TextLocation>{item.location.country}</TextLocation>
                                            </View>
                                        </View>
                                   </CardContent>
                                   <TouchableOpacity
                                    onPress={() => navigation.navigate('User', item)}
                                    style={{position: 'absolute', top: 15, right: 25}}>
                                       <Icon1 name="eye" size={30} color={colors.greenPrimary}/>
                                   </TouchableOpacity>
                                </Card>
                            )}
                            initialNumToRender={10}
                            maxToRenderPerBatch={5}
                            onEndReached={() => loadMore()}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={
                                loadingMore ? (
                                <ActivityIndicator color={colors.greenPrimary} size="large" />
                                ) : (
                                <></>
                                )
                            }
                        />
                    )}
                </Content>
        </Container>
    )
}


export default Home