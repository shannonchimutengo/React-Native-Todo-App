import {View,Text} from "react-native";

 const  OurChild = (props) =>{
    const {message} = props;
    return(
<View>
    <Text>{message}</Text>
    </View>
    )
}
export default OurChild;