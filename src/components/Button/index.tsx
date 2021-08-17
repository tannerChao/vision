/*
 * @Author: your name
 * @Date: 2021-08-17 01:36:48
 * @LastEditTime: 2021-08-17 17:03:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vision-core-code/src/components/Button/index.tsx
 */
import Default from './Button';
import ButtonIcon from './Button.Icon'

type InternalFormType = typeof Default;

export interface buttonInstance extends  InternalFormType{
	ButtonIcon: typeof ButtonIcon
}

const Button = Default as buttonInstance;
Button.ButtonIcon = ButtonIcon;

export { ButtonIcon }
export default Button
