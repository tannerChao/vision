/*
 * @Author: your name
 * @Date: 2021-08-17 21:45:07
 * @LastEditTime: 2021-08-18 00:41:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vision-core-code/src/components/Search/Search.tsx
 */
import React, { ReactNode, useMemo } from 'react';
import { styled, } from '@material-ui/core/styles';
import {
	Box,
	Input,
	InputProps,
	BoxProps
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export const Search = styled(Box)(({ theme }) => ({
	width: '80%',
	height: '100%',
	backdropFilter: 'blur(6px)',
	WebkitBackdropFilter: 'blur(6px)',
	borderRadius: theme.spacing(2),
	margin: theme.spacing(0, 2),
	border: 'solid 1px #fff',
	[theme.breakpoints.down('md')]: {
		margin: theme.spacing(0, 2, 0, 0),
	}
}));

/**
 * @name: SearchProps
 * @msg: Search 外层 Props
 * BoxProps: Search 外层样式自定义
 * startAdornment: input 前面 startAdornment
 * endAdornment: input 尾部 endAdornment
 */
export interface SearchProps extends InputProps {

	BoxProps?: BoxProps,
	startAdornment?: InputProps['startAdornment'] | boolean,
	endAdornment?: InputProps['endAdornment'] | boolean,
}

const Deault: React.FC<SearchProps> = ({ BoxProps, ...props }) => {

	const { startAdornment, endAdornment, ..._props } = props

	const _startAdornment: ReactNode = useMemo(() => {
		console.log(startAdornment)
		if (typeof startAdornment === 'boolean' && startAdornment
		) {
			return <SearchIcon color='secondary' />
		}
		return startAdornment
	}, [startAdornment])

	const _endAdornment: ReactNode = useMemo(() => {
		if (typeof endAdornment === 'boolean' && endAdornment
		) {
			return <SearchIcon color='secondary' />
		}
		return endAdornment
	}, [endAdornment])

	return (
		<Search bgcolor='palevioletred' px={2} py={.5} {...BoxProps}>
			<Input
				fullWidth
				startAdornment={
					_startAdornment
				}
				endAdornment={
					_endAdornment
				}
				{
				..._props
				}
			/>
		</Search>
	)
}

export default Deault