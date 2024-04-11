import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather} from "@expo/vector-icons"
import  colors  from "tailwindcss/colors";
import { Link } from "expo-router";

type HeaderProps = {
    title: string
    cartQuantityItems?: number
    
}

export function Header({title, cartQuantityItems = 0 }: HeaderProps) {
    return (
        <View className="flex flex-row items-center border-b border-slate-700 pb-5 mx-5"
          style={{flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#334155", borderColor:"slate-700", paddingBottom:5, marginLeft:5, marginRight:5}}> 
            <View className="flex-1" style={{flex:1, justifyContent:"space-around", padding:5, margin:5}}>
                <Image source={require("@/assets/logo.png")} style={{height: 35, width:200}}/>
                <Text className="text-white text-xl font-heading mt-2"
                  style={{color: "white", fontSize:18}} 
                >{title}</Text>
            </View>
            {cartQuantityItems> 0 && (
                <Link href="/Cart" asChild>
                    <TouchableOpacity className="relative" activeOpacity={0.7} style={{position:"relative"}}>
                        <View className="bg-lime-300 w-10 h-10 rounded-full justify-center items-center top-2 z-10 -right-3.5" 
                         style={{backgroundColor: "#bef264", borderRadius: 100, width: 20, height:20, justifyContent:"center", alignItems: "center", top:2,  }}
                        >
                            <Text className="text-slate-900 font-bold text-xl" style={{color:"#0f172a", fontWeight:"bold", }}>{cartQuantityItems}</Text>
                        </View>
                        <Feather name="shopping-bag" color={colors.white} size={24}/>
                    </TouchableOpacity>
                </Link>
            )}
        </View>
    );
}
