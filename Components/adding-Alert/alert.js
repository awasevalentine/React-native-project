import { Alert } from "react-native";

const AlertComponent = ({name}) => {
    var name ="me"
    // const { name } = data;
    alert(name)
    console.log("This is it ", name)

    return  onItemClick = ()=>{
        switch(name){
            case "Mango":
                Alert.alert(`${name}`, `This is fruit is highly nutritional`)
                break;
            case "Bannana":
                Alert.alert(`${name}`, `Another essential fruit to be taken`)
                break;
            default:
                Alert.alert(`${name}`, `Are you sure you'd like to consume this fruit ?`,[
                    {
                        text: 'Yes', onPress: ()=> {
                            Alert.alert(`${name}`, `I haven't tried this fruit before, but hope to try it this week!`)
                        }
                    },
                    {
                        text: "No", onPress: ()=> {
                            Alert.alert(`${name}`, `Please Try other fruits on the list`)
                        }
                    }
                ])
        }
    }
    return ( 
        <View>

        </View>
     );
}
 
export default AlertComponent;