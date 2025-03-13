import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton: React.FC<ButtonProps> = ({ title, onPress }) => {
    return(
        <TouchableOpacity style = { styles.button } onPress={onPress}>
            <Text style = { styles.buttonText }> {title} </Text>
        </TouchableOpacity>
    );
};

type ButtonProps = {
    title: string,
    onPress: () => void
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#9acd32',
        alignItems: 'center',
        borderRadius: 8,
        padding: 10,
        margin: 10
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default CustomButton;