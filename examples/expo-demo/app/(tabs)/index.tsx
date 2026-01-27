import { Image, StyleSheet } from 'react-native';

import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FairysRNValtioForm } from '@fairys/rn-valtio-form-basic';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  const form = FairysRNValtioForm.useForm();

  const onSubmit = async () => {
    try {
      const values = await form.validate();
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}
    >
      <FairysRNValtioForm
        form={form}
        bordered
        title={<Text>登录表单</Text>}
        extra={<Text>额外信息</Text>}
        showColon
        rules={{
          username: [{ required: true, message: '请输入用户名' }],
        }}
        isInvalidBorderRed
        // isInvalidTextRed
      >
        <FairysRNValtioForm.FormItem label="用户名" name="username">
          <TextInput placeholder="请输入" />
        </FairysRNValtioForm.FormItem>
        <FairysRNValtioForm.FormItem
          label="用户名2"
          name="username2"
          rules={[{ required: true, message: '请输入用户名2' }]}
        >
          <TextInput placeholder="请输入" />
        </FairysRNValtioForm.FormItem>
      </FairysRNValtioForm>
      <TouchableOpacity onPress={onSubmit}>
        <Text>提交</Text>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
