<template>
  <div id="app">
    <SearchTable /> <!--msg="Welcome to Your Vue.js App"-->
  </div>
</template>

<script>
	import SearchTable from './components/SearchTable.vue'

	export default {
		name: 'app',
		components: {
			SearchTable
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		color: #2c3e50;
		margin-top: 30px;
	}
	.table {
		width: 40%;
		position: relative;
	}
	input[type=text] {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
	}
	input[type=submit] {
		width: 100%;
		background-color: #4CAF50;
		color: white;
		padding: 14px 20px;
		margin: 8px 0;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	input[type=submit]:hover {
		background-color: #45a049;
	}
	label:nth-child(2){
		float: right;
	}
	table {
		width: 100%;
		margin-top: 20px;
		border-collapse: collapse;
	}
	table>tr {
		text-align: left;
	}
	table th {
		cursor:pointer;
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		color: white;
		background-color: #4CAF50;
	}
	table>tr>th, table>tr>td {
		border: 1px solid #ddd;
		padding: 10px 15px;
	}
</style>
