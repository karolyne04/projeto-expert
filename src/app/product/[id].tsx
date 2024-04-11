import { View, Image, Text } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Button } from "@/components/Button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/Link-button";
import { useCartStore } from "@/stores/cart-store";
import { Redirect } from "expo-router";

export default function Product() {
    const cartStore = useCartStore();
    const navigation = useNavigation()
    const  { id } = useLocalSearchParams()

    const product = PRODUCTS.find((product)=> product.id === id)

    function handleAddToCart(){
        if(product) {
            cartStore.add(product)
            navigation.goBack()
        }
    }

    if(!product) {
        return <Redirect href="/"/>
    }
    return (

        <View className="flex-1">
            <Image
              source={product.cover}
              className="w-full h-52"
              resizeMode="cover"
            />

            <View className="p-5 mt-2 flex-1" >
                <Text className="text-white text-xl font-heading">{product.title}</Text>
                <Text className="text-lime-400 text-2xl font-heading my-2">
                    {formatCurrency(product.price)}
                </Text>
                <Text className="text-white font-body text-base leading-4 mb-4">
                    {product.description}
                </Text>

                {product.ingredients.map((ingredient) => (
                    <Text key={ingredient} className="text-slate-400 font-body text-base leading-6">{"\u2022"} {ingredient}</Text>
                ))}
            </View>

            <View className="p-5 pb-5 gap-5 items-center">
                <Button onPress={handleAddToCart} className=" bg-lime-400 flex-row h-12 items-center rounded-md font-heading">
                    <Button.Icon>
                        <Feather name="plus-circle" size={20}/>
                    </Button.Icon>
                    <Button.Text>Adicionar ao pedido</Button.Text>
                </Button>

                <LinkButton title="Voltar ao cardápio" href="/" className="text-white items-center justify-center font-body"/>
            </View>
        </View>

    ) 
}