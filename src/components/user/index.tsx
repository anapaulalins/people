import React from 'react'
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import { RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import {  View} from 'react-native'
import {
    Container, 
    Content , 
    ContentProfile,
    TextName,
    UserName,
    ButtonConnect,
    UserImage,
    TextUser,
    TextUserLabel,
    ButtonBack,
    Text,
    TextParams
} from './styles'
import { colors } from '../../themes/colors';

type ParamsItem = {
    Params: {
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
        },
        dob: {
            age: number
        },
        gender: string,
    }
  }
  

const User: React.FC = () => {

    const { params} = useRoute<RouteProp<ParamsItem , 'Params'>>()

    const navigation = useNavigation()
  
    return (
        <Container>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{flex: 1}}
                initialRegion={{
                    latitude: -8.1328094,
                    longitude: -34.9088169,
                    latitudeDelta: 0.0068,
                    longitudeDelta: 0.0068
                }}
            >
            </MapView>
            <Content>
               <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40}}>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <TextName numberOfLines={1}>{params.name.first} {params.name.last}</TextName>
                        <UserName>@{params.login.username}</UserName>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
                            <View>
                                <Text>Age</Text>
                                <TextParams>{params.dob.age}</TextParams>
                            </View>
                            <View style={{marginLeft: 20}}>
                                <Text>Gender</Text>
                                <TextParams>{params.gender}</TextParams>
                            </View>
                        </View>
                    </View>
                    <ButtonConnect>
                        <Icon name="person-add-outline" color={colors.secondary} size={25} style={{marginRight: 5}}/>
                        <UserName style={{color: colors.secondary}}>Connect</UserName>
                    </ButtonConnect>
               </View>
               <ContentProfile>
                    <View style={{ flexDirection: 'row', overflow: 'hidden'}}>
                        <UserImage source={{uri: params.picture.large}} />
                        <View style={{marginLeft: 20, flex: 1}}>
                            <TextUserLabel>Email:</TextUserLabel>
                            <TextUser>{params.email}</TextUser>
                            <TextUserLabel>Phone:</TextUserLabel>
                            <TextUser>{params.phone}</TextUser>
                        </View>
                    </View>
               </ContentProfile>
            </Content>
            <ButtonBack
                onPress={() => navigation.goBack()}
                style={{
                    shadowColor: "#817878",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}
            >
                <Icon name="arrow-back" size={30} color={colors.secondary} />
            </ButtonBack>
        </Container>
    )
}


export default User