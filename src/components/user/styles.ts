
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../themes/colors";

const { height, width } = Dimensions.get('window')


export const Container = styled.SafeAreaView`
    flex: 1;
`

export const Content = styled.View`
    border-radius: 50px;
    position: absolute;
    top: ${height - 300}px;
    height: ${height}px;
    width: ${width}px;
    background-color: ${colors.greenPrimary};
    padding-top: 40px;
`
export const TextName = styled.Text`
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: ${colors.primary};
`

export const UserName = styled.Text`
    font-size: 12.5px;
    font-weight: 700;
    color: ${colors.light};
`

export const Text = styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: ${colors.primary};
`
export const TextParams = styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: ${colors.secondary};
    text-transform: capitalize;
    margin-top: 5px;
    background-color: ${colors.primary};
    text-align: center;
    border-radius: 5px;
    padding: 3px 5px;
`


export const ButtonConnect = styled.TouchableOpacity`
    background-color: ${colors.primary};
    align-self: flex-start;
    flex-direction: row;
    align-items: center;
    border-radius: 30px;
    padding: 8px 15px;
    margin-left: 20px;
`

export const ContentProfile = styled.View`
    background-color: ${colors.primary};
    margin-top: 25px;
    padding: 0 25px;
    padding-top: 30px;
    padding-bottom: 15px;
    border-radius: 50px;
    flex:1;
`

export const UserImage = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 20px;
`
export const TextUser = styled.Text`
    font-size: 13px;
    font-weight: 700;
    color: ${colors.greenPrimary};
`
export const TextUserLabel = styled.Text`
    font-size: 12px;
    font-weight: 700;
    margin-top: 5px;
    color: ${colors.secondary};
`
export const ButtonBack = styled.TouchableOpacity`
    position: absolute;
    top: 55px;
    left: 35px;
    background-color: ${colors.primary};
    padding: 8px 13px;
    border-radius: 10px;
`