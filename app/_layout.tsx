import { Stack, useSegments } from "expo-router";
import '../global.css';


export default function RootLayout() {
  const segments=useSegments()
console.log(segments)

  return <Stack  screenOptions={{headerShown:false}}/>;
}
