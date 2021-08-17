/*
 * @Author: your name
 * @Date: 2021-08-17 21:42:07
 * @LastEditTime: 2021-08-18 00:39:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vision-core-code/src/components/Search/index.tsx
 */
import Default from './Search';
import SearchBar from './SearchBar'

type DefaultType = typeof Default;

export interface SearchInstance extends DefaultType {
	SearchBar: typeof SearchBar
}

const Search = Default as SearchInstance;
Search.SearchBar = SearchBar;

export { SearchBar }
export default Default


