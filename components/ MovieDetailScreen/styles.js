import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#000217'
    },
    details:{
        padding:15
    },
    
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color:"white"
        },
        match: {
            color: '#59d467',
            fontWeight: 'bold',
            marginRight: 20,
        },
        year: {
            color: '#757575',
            marginRight: 20,
        },
        ageContainer: {
            backgroundColor: '#e6e229',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            paddingHorizontal: 3,
            marginRight: 5,
        },
        age: {
            color: 'black',
            fontWeight: 'bold'
        },
        
        // Button
        playButton: {
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            borderRadius: 3,
            marginVertical: 5,
        },
        playButtonText: {
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold'
        },
        downloadButton: {
            backgroundColor: '#2b2b2b',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            borderRadius: 3,
            marginVertical: 5,
        },
        downloadButtonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold'
        }

})

export default styles