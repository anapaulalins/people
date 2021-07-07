import { colors } from './../../themes/colors';
import styled from 'styled-components/native'

interface PropsButtonPlace{
    active: boolean
}

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.primary};
`
export const Header = styled.View`
    margin-top: 80px;
    flex-direction: row;
    padding-left: 20px;
`
export const Title = styled.Text`
    font-size: 21px;
    width: 100px;
    font-weight: 700;
    color: ${colors.secondary};
`

export const InputView = styled.View`
    flex: 1;
    background-color: ${colors.light};
    margin-left: 15px;
    padding-left: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    flex-direction: row;
    align-items: center;
`

export const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    margin-left: 10px;
`
export const PlaceContainer = styled.View`
    margin-top: 40px;
    padding-left: 20px;
    flex-direction: row;
    align-items: center;
`

export const PlaceTitle = styled.Text`
    font-size: 18px;
    width: 90px;
    font-weight: 700;
    color: ${colors.secondary};
`

export const PlaceButton = styled.TouchableOpacity<PropsButtonPlace>`
    margin-left: 10px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    background-color: ${props => props.active ? colors.greenPrimary : colors.light};
`

export const PlaceButtonTitle = styled.Text<PropsButtonPlace>`
    font-size: 15px;
    font-weight: 700;
    color: ${props => props.active ? colors.primary : colors.greenPrimary};
`

export const Content = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 30px;
    padding: 0 20px;

`
export const Card = styled.View`
    background-color: ${colors.light};
    margin-top: 10px;
    border-radius: 30px;
    padding: 15px ;
    flex-direction: row;
    position: relative;
`

export const ImageCard = styled.Image`
    height: 85px;
    width: 85px;
    border-radius: 20px;
`

export const CardContent = styled.View`
    margin-left: 15px;
    flex: 1;
`
export const CardTitle = styled.Text`
    font-size: 16px;
    color: ${colors.secondary};
    font-weight: 700;
    margin-top: 5px;
    margin-bottom: 10px;
    align-self: flex-start;
`
export const TextLocation = styled.Text`
    font-size: 14px;
    color: ${colors.secondary};
    font-weight: 700;
    margin-left: 5px;
`