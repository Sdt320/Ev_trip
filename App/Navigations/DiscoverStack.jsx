import { createStackNavigator } from '@react-navigation/stack';
import Discover from '../Screen/MainScreen/Discover';
import ItemScreen from '../Screen/MainScreen/ItemScreen'; // Assuming this is your ItemScreen component

const Stack = createStackNavigator();

const DiscoverStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Discover" component={Discover} />
    <Stack.Screen name="ItemScreen" component={ItemScreen} />
  </Stack.Navigator>
);

export default DiscoverStack;
