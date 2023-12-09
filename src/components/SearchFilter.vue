<template>
  <div class="filter-menu">
    <div class="input-form">
      <form class="main-search">
        <div><img src="@/assets/icons/ic_search@3x.png" alt="search" /></div>
        <div class="input-field">
          <input
            v-model="searchQuery"
            name="searchHouses"
            type="text"
            placeholder="Search for a house"
          />
        </div>
        <div v-if="searchQuery" @click="clearSearchQuery()" class="clear-icon">
          <img src="@/assets/icons/ic_clear@3x.png" alt="clear" />
        </div>
      </form>
    </div>
    <div class="filter-buttons">
      <div
        class="price-button"
        :class="{ active: activeFilter === 'Price' }"
        @click="changeFilter('Price')"
      >
        Price
      </div>
      <div
        class="size-button"
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
.filter-menu {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 10px;
  border-radius: 10px;
}
.input-field {
  width: 100%;
}
.main-search {
  display: flex;
  width: 100%;
}
.input-form {
  background-color: #e8e8e8;
  width: 35%;
  border-radius: 5px;
}
input:focus-visible {
  outline: none;
}
.input-form img {
  height: 20px;
  padding: 15px;
}
.input-form input {
  width: 95%;
  background-color: #e8e8e8;
  height: 48px;
  border: none;
  font-size: 18px;
  font-weight: 400;
}
.filter-buttons {
  display: flex;
}
.price-button,
.size-button {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: white;
  padding: 15px 70px 15px 70px;
  cursor: pointer;
  background-color: #c3c3c3;
}
.price-button {
  border-radius: 8px 0px 0px 8px;
}
.size-button {
  border-radius: 0px 8px 8px 0px;
}
.price-button.active,
.size-button.active {
  background-color: #eb5440;
}
.filter-menu {
  padding-left: 15px;
  padding-right: 15px;
}
@media only screen and (max-width: 768px) {
  .filter-buttons {
    width: 100%;
  }
  .price-button,
  .size-button {
    font-size: 12px;
    padding: 12px 70px 12px 70px;
    width: 50%;
    text-align: center;
  }
  .input-form {
    width: 100%;
    margin-bottom: 10px;
  }
  .input-form input {
    height: 32px;
    font-size: 14px;
  }
  .main-search {
    height: 38px;
  }
  .input-form img {
    height: 18px;
    padding: 10px;
  }
  .clear-icon img {
    height: 18px;
    width: 18px;
  }
}
</style>
