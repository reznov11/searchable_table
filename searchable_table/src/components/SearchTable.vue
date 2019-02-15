<template>
	<div class="table">
		<label for="search_query">
			Поиск:
			<input type="text" id="search_query" v-model="search_query" placeholder="напиши что либо.....">
		</label>
		<table>
			<tr>
				<th>Id</th>
				<th @click="sort('name')">Name <i>&#8616;</i></th>
				<th @click="sort('date')">Timestamp <i>&#8616;</i></th>
			</tr>
			<tr v-for="key in sortedData" :key="key.id">
				<td>{{key.id}}</td>
				<td>{{key.name}}</td>
				<td>{{key.date | moment("MMMM Do YYYY")}}</td>
			</tr>
		</table>
	</div>
</template>

<script>

	export default {
		name: 'SearchTable',
		data () {
			return {
				search_query: '',
				currentSort:'date',
				currentSortDir:'asc'
			}
		},
		computed: {
			// Fetch data
			getData(){
				return this.$store.state.getData
			},
			// By search_query input filter
			filteredList() {
				return this.getData.filter((data) => {
					return data.name.toLowerCase().includes(this.search_query.toLowerCase());
				})
			},
			// Sorte fetched data by default << currentSort
			sortedData:function() {
				return this.getData.sort((a,b) => {
					let modifier = 1;
					if(this.currentSortDir === 'desc') modifier = -1;
					if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
					if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
					return 0;
				});
			}
		},
		methods:{
			// Type of sorting
			sort:function(s) {
				if(s === this.currentSort) {
					this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
				}
				this.currentSort = s;
			}
		}
	}
</script>