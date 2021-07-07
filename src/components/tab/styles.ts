import styled from 'styled-components/native';
import { colors } from '../../themes/colors';

export const Container = styled.View`
  position: absolute;
  bottom: 25px;
  left: 20px;
  right: 20px;
  background-color: ${colors.greenPrimary};
  border-radius: 20px;
  height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TabItem = styled.TouchableOpacity`
  flex-direction: row;
  height: 100%;
  padding: 0 20px;
  align-items: center;
  position: relative;
`;



