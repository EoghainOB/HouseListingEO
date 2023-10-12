<template>
  <div class="filterMenu">
    <div class="inputForm">
      <form class="mainSearch">
        <div><img src="src/components/icons/ic_search@3x.png" alt="search" /></div>
        <div class="inputField">
          <input
            v-model="searchQuery"
            name="searchHouses"
            type="text"
            placeholder="Search for a house"
          />
        </div>
        <div v-if="searchQuery" @click="clearSearchQuery()">
          <img src="src/components/icons/ic_clear@3x.png" alt="clear" />
        </div>
      </form>
    </div>
    <div class="filterButtons">
      <div
        class="priceButton"
        :class="{ active: activeFilter === 'Price' }"
        @click="changeFilter('Price')"
      >
        Price
      </div>
      <div
        class="sizeButton"
        :class="{ active: activeFilter === 'Size' }"
        @click="changeFilter('Size')"
      >
        Size
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFilter',
  watch: {
    searchQuery: {
      handler: function (newVal) {
        this.$emit('filterChanged', { filter: this.activeFilter, searchQuery: newVal })
      },
      immediate: true
    }
  },
  data() {
    return {
      searchQuery: '',
      activeFilter: 'Price'
    }
  },
  methods: {
    changeFilter(filter) {
      this.activeFilter = filter
      this.$emit('filterChanged', { filter, searchQuery: this.searchQuery })
    },
    clearSearchQuery() {
      this.searchQuery = ''
    }
  }
}
</script>

<style>
.filterMenu {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 10px;
  border-radius: 10px;
}

.inputField {
  width: 100%;
}

.mainSearch {
  display: flex;
  align-items: center;
  width: 100%;
}

.inputForm {
  background-color: #e8e8e8;
  width: 35%;
  border-radius: 5px;
}

input:focus-visible {
  outline: none;
}

.inputForm img {
  height: 20px;
  padding: 15px;
}

.inputForm input {
  width: 95%;
  background-color: #e8e8e8;
  height: 48px;
  border: none;
  font-size: 18px;
  font-weight: 400;
}

.filterButtons {
  display: flex;
}

.priceButton,
.sizeButton {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: white;
  padding: 15px 70px 15px 70px;
  cursor: pointer;
}

.priceButton {
  background-color: #c3c3c3;
  border-radius: 8px 0px 0px 8px;
}

.sizeButton {
  background-color: #c3c3c3;
  border-radius: 0px 8px 8px 0px;
}

.priceButton.active,
.sizeButton.active {
  background-color: #eb5440;
}
</style>
