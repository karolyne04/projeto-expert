import { TouchableOpacity, TouchableOpacityProps, Image, ImageProps, View, Text } from "react-native";
import {forwardRef} from "react"

type ProductDataProps = {
    title: string
    description: string
    thumbnail: ImageProps
    quantity?: number
}

type ProductProps = TouchableOpacityProps & {
    data: ProductDataProps
}

export const Product = forwardRef<TouchableOpacity, ProductProps>( 
    ({ data, ...rest}, ref) => {

    return (
        <TouchableOpacity ref={ref} className="flex-row w-full  items-center pb-4" {...rest} style={{flexDirection:"row"}}>
            <Image source={data.thumbnail} className="w-20 h-20 rounded-md"/>
            <View className="flex-1 ml-3 gap-10" style={{gap:10, justifyContent:"center"}}>
                <View className="gap-5" style={{justifyContent:"space-around", gap:10}}>

                    <Text className="text-slate-100 font-subtitle text-base flex-1" style={{color:"white", fontSize:18, gap:5}}>{data.title}</Text>
                    {data.quantity && <Text className="text-slate-400 font-subtitle text-sm" style={{color:"#94a3b8"}}>X{data.quantity}</Text>}
                </View>
                <Text className="text-slate-400 text-xs leading-5 mt-0.5" style={{color: "white"}} >{data.description} </Text>
            </View>
        </TouchableOpacity>
    )
    }
)



