import { TextInput } from "react-native";

type SearchInputProps = {
    value: string,
    onChangeText: (text: string) => void,
}

function SearchInput(props: SearchInputProps) {
    // const onChange = ()
    return (
        <TextInput 
            style={{
                borderColor: 'red',
                borderStyle: 'solid',
                borderWidth: 1,
            }}
            onChangeText={props.onChangeText}
            value={props.value} 
        />
    )
}

export default SearchInput;