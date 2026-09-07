import { Text, View } from 'react-native';

interface EditScreenInfoProps {
  path: string;
}

export const EditScreenInfo: React.FC<EditScreenInfoProps> = ({ path }) => {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <View className="w-full">
      <View className="mx-12 items-center">
        <Text className="text-center text-lg leading-6">{title}</Text>
        <View className="my-2 rounded-md px-1">
          <Text>{path}</Text>
        </View>
        <Text className="text-center text-lg leading-6">{description}</Text>
      </View>
    </View>
  );
};
