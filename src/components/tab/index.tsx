
import React, {useCallback} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Container, TabItem} from './styles';
import { colors } from '../../themes/colors';

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const navigationScreen = useCallback(
    (screenName: string) => {
      navigation.navigate(screenName);
    },
    [navigation],
  );

  return (
    <Container>
      <TabItem onPress={() => navigationScreen('Home')}>
        {state.index === 0 ? (
           <Icon
           name="home"
           size={35}
           color="#fbf8ee"
         />
        ) : (
          <Icon
            name="home-outline"
            size={35}
            color="#fbf8ee"
        />
        )}
      </TabItem>
      <TabItem onPress={() => navigationScreen('Favorite')}>
        {state.index === 1 ? (
          <Icon
            name="heart"
            size={35}
            color={colors.primary}
          />
        ) : (
          <Icon
            name="heart-outline"
            size={35}
            color={colors.primary}
          />
        )}
      </TabItem>
      <TabItem onPress={() => navigationScreen('Profile')}>
        {state.index === 2 ? (
          <Icon
            name="person"
            size={35}
            color={colors.primary}
          />
        ) : (
          <Icon
            name="person-outline"
            size={35}
            color={colors.primary}
          />
        )}
      </TabItem>
    </Container>
  );
};

export default TabBar;