// import {
//   View,
//   Button,
// } from 'react-native';

// import Products from './products';

// import { StackScreenProps } from '@react-navigation/stack';
// type RootStackParamList = {
//     Home: undefined;
//   };
// type Props = StackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen(props) {
    console.log(props)
    return (
        <div>teste</div>
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Products />
        //     <Button title="Go to Checkout" onPress={() => props.navigation.navigate('Checkout')} />
        // </View>
    );
}

export default HomeScreen;