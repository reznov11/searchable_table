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
	input[type=text], select {
		padding: 10px 5px;
	}
	label:nth-child(2){
		float: right;
	}
	table {
		margin-top: 20px;
	}
	table>tr {
		text-align: left;
	}
	table th {
		cursor:pointer;
	}
	table>tr>th, table>tr>td {
		border: 1px solid #000;
		padding: 10px 15px;
	}
</style>
