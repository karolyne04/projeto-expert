import { Text, Pressable, PressableProps, StyleSheet} from "react-native"
import { clsx } from "clsx"

type CategoryProps = PressableProps & {
    title: string
    isSelected?: boolean
}

export  function CategoryButton({title, isSelected, ...rest }: CategoryProps) {
    return (
        <Pressable className={clsx("bg-slate-800 px-4 justify-center rounded-md h-10", isSelected && "border-lime-300")} {...rest} 
            {...rest} style={[styles.pressable, isSelected && styles.selectedBorder]}>
            <Text className="text-slate-100 font-subtitle text-sm"
             style={styles.text}>{title}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    pressable: {
        backgroundColor: "#1e293b",
        padding:3,
        justifyContent: "center",
        borderRadius: 6,
        height:40,
    },
    selectedBorder: {
        borderWidth:2,
        borderColor: "#bef264",
    },
    text: {
        color: "#F9FAFB",
        fontSize:14,
        fontFamily:"subtitle",
    }
})