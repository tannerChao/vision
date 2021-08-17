/*
 * @Author: your name
 * @Date: 2021-08-17 09:43:27
 * @LastEditTime: 2021-08-17 16:13:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vision-core-code/src/components/Button/Button.tsx
 */

import React from "react";
import { Button, ButtonProps } from "@material-ui/core";

const Default: React.FC<ButtonProps> = (props) => (<Button {...props}>{props?.children || null}</Button>)

export type { ButtonProps }

export default Default
