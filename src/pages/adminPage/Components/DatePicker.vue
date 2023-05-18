<template>
  <VueDatePicker v-model="date">
    <template
        #month-year="{
              month,
              year,
              months,
              years,
              updateMonthYear,
              handleMonthYearChange
      }">
      <div class="custom-month-year-component">
        <select
            class="select-input"
            :value="month"
            @change="updateMonth($event, updateMonthYear, year)">
          <option v-for="m in months" :key="m.value" :value="m.value">{{ m.text }}</option>
        </select>
        <select
            class="select-input"
            :value="year"
            @change="updateYear($event, updateMonthYear, month)">
          <option v-for="y in years" :key="y.value" :value="y.value">{{ y.text }}</option>
        </select>
      </div>
      <div class="icons">
          <span
              class="custom-icon"
              @click="handleMonthYearChange(false)">
            <ChevronLeftIcon />
          </span>
        <span
            class="custom-icon"
            @click="handleMonthYearChange(true)">
            <ChevronRightIcon />
          </span>
      </div>
    </template>
  </VueDatePicker>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const date = ref(new Date());

type UpdateMonthYear = (month: number, year: number) => void;

const updateMonth = (event: InputEvent, updateMonthYear: UpdateMonthYear, year: number) => {
  updateMonthYear(+(event.target as HTMLSelectElement).value, year);
};

const updateYear = (event: InputEvent, updateMonthYear: UpdateMonthYear, month: number) => {
  updateMonthYear(month, +(event.target as HTMLSelectElement).value);
};
</script>

<style>
.custom-month-year-component {
  display: flex;
  align-items: center;
  margin: 0 auto;
}

.select-input {
  margin: 5px 3px;
  padding: 5px;
  width: auto;
  border-radius: 4px;
  border-color: var(--dp-border-color);
  outline: none;
  -webkit-appearance: menulist;
}

.icons {
  display: flex;
  box-sizing: border-box;
}

.custom-icon {
  padding: 5px;
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 25px;
  color: var(--dp-icon-color);
  text-align: center;
  border-radius: 50%;

  svg {
    height: 20px;
    width: 20px;
  }

  &:hover {
    background: var(--dp-hover-color);
  }
}
</style>