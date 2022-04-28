import { View, Image, Text } from "react-native";
import { useState } from "react";
import { styles } from "./image-style";

const AddingImageComponent = () => {
    const [image, setImage ] = useState(1)

    var pictures ={
        '1': require('../../assets/Images/baby.png'),
        '2': require('../../assets/turtule_neck_shirt.png'),
        '3': require('../../assets/sms.png'),
        // '4': require('../../assets/Images/babe.png'),
        '5': require('../../assets/Images/baby2.png'),


    }

    function SelectImage(){
        switch(image){
            case 1:
                setImage(2)
                break
            case 2:
                setImage(3)
                break
            // case 3:
            //     setImage(4)
            //     break
            case 4:
                setImage(5)
                break
            default:
                setImage(1)
        }
    }
    return ( 
        <View style={styles.container}>

            <Text style={styles.header}> Image Section</Text>
            <Image style={styles.pic} source={pictures[image]} />
            <Text style={styles.btn} onPress={()=> SelectImage()}>Change Image</Text>
        </View>
     );
}
 
export default AddingImageComponent;