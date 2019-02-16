<template>
	<div class="table">
		<label for="search_query">
			<!-- Поиск: -->
			<input type="text" id="search_query" v-model="search_query" placeholder="напиши что либо.....">
		</label>
		<p>
			Page numbers: {{currentPage}} / {{currentPage*pageSize}}
		</p>
		<table @wheel="loadMoreData">
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
				currentSortDir:'asc',
				pageSize:20,
				currentPage:1
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
				return this.filteredList.sort( (a , b) => {
					let modifier = 1;
					if( this.currentSortDir === 'desc' ) modifier = -1;
					if( a[this.currentSort] < b[this.currentSort] ) return -1 * modifier;
					if( a[this.currentSort] > b[this.currentSort] ) return 1 * modifier;
					return 0;
				}).filter((row, index) => {
					let start = (this.currentPage-1) * this.pageSize;
					let end = this.currentPage * this.pageSize;
					if(index >= start && index < end) return true;
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
			},
			// Handeling the wheel event
			loadMoreData (element, event) {
				if(element.deltaY > 0){
					// deltaY = 100
					this.nextPage()
				} else {
					// deltaY = -100
					this.prevPage()
				}
			},
			// Move to next page
			nextPage:function() {
				if((this.currentPage*this.pageSize) < this.filteredList.length) this.currentPage++;
			},
			// Move to previous page
			prevPage:function() {
				if(this.currentPage > 1) this.currentPage--;
			}
		}
	}
</script>