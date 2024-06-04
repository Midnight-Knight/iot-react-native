import {Button, Card} from "@rneui/themed";


export default function FalseSignal({onPress}) {
    return <Card>
        <Card.Title h3={true}>
            Соединение неустановлено
        </Card.Title>
        <Card.Divider />
        <Button
            title="Повторить"
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
                borderRadius: 5,
                backgroundColor: 'red',
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
            containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
            }}
            onPress={onPress}
        />
    </Card>
}