/*
 * @Author: your name
 * @Date: 2021-08-17 22:44:35
 * @LastEditTime: 2021-08-18 00:44:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vision-core-code/src/components/Search/SearchBar.tsx
 */
import React from 'react';
import {
	Box,
	BoxProps
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import Search, { SearchProps } from './Search'


const SearchbarStyle = styled(Box)(({ theme }) => ({


}));
/**
 * @name: SearchBarProps
 * @msg: 搜索： 带热门标签搜索
 * SearchProps：search component props 
 * Tag: Tag 热门的复合组件
 */
export interface SearchBarProps extends BoxProps {
	SearchProps?: SearchProps,
	Tag?: any
}
const SearchBar: React.FC<SearchBarProps> = ({ SearchProps, Tag: TagProps, ...props }) => {
	return (
		<SearchbarStyle  {...props}>
			<Search {...SearchProps} />
			{
				TagProps && <Box>
					{
						props?.children || null
					}
				</Box>
			}
		</SearchbarStyle>
	)
}

export default SearchBar