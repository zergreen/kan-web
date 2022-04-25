<template>
  <!-- แบนเนอร์ -->
  <!-- <HeadTable></HeadTable> -->
  <!-- <h1>---------------------------------</h1>
  <Green></Green> -->
  <div style="text-align: left">
    <label>SearchBy:</label><input v-model="searchTerm" />
  </div>
  <table-lite
    :is-static-mode="true"
    :columns="table.columns"
    :rows="table.rows"
    :total="table.totalRecordCount"
    :sortable="table.sortable"
  ></table-lite>
</template>

<script>
import { reactive, ref, computed } from "vue";
import TableLite from "vue3-table-lite";
// import TableLite from "@/components/TableLite.vue";
// import Green from "@/components/Green.vue";
// import HeadTable from "@/components/HeadTable.vue";


export default {
  name: "MyTable",
  components: { TableLite,  },
  setup() {
    const searchTerm = ref(""); // Search text
    // Fake data
    const data = reactive([]);
    for (let i = 0; i < 126; i++) {
      data.push({
        id: i,
        firstname: "KMITL" + i,
        lastname: "WTF" + i,
        sector: "NORTH" + i,
        province: "BANGKOK" + i,
        hang: "Bangrak" + i,
        county: "Jai" + i,
        road: "Bangyang",
        house_number: i + "/" + (i*4),
        class: i,
      });
    }
    // Table config
    const table = reactive({
      columns: [
        {
          label: "ID",
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "ชื่อ",
          field: "firstname",
          width: "10%",
          sortable: true,
        },
        {
          label: "นามสกุล",
          field: "lastname",
          width: "10%",
          sortable: true,
        },
        {
          label: "ภาค",
          field: "sector",
          width: "5%",
          sortable: true,
        },
        {
          label: "จังหวัด",
          field: "province",
          width: "5%",
          sortable: true,
        },
        {
          label: "อำเภอ/เขต",
          field: "hang",
          width: "5%",
          sortable: true,
        },
        {
          label: "ตำบล",
          field: "county",
          width: "5%",
          sortable: true,
        },
        {
          label: "ถนน",
          field: "road",
          width: "5%",
          sortable: true,
        },
        {
          label: "บ้านเลขที่",
          field: "house_number",
          width: "5%",
          sortable: true,
        },
        {
          label: "ชั้นปี",
          field: "class",
          width: "5%",
          sortable: true,
        },
      ],
      rows: computed(() => {
        return data.filter(
          (x) =>
            // x.id.includes(searchTerm.value) ||
            x.firstname.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            x.lastname.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            x.sector.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            x.province.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            x.hang.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            x.county.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            x.road.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            x.house_number.toLowerCase().includes(searchTerm.value.toLowerCase())
            // x.class.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            
        );
      }),
      totalRecordCount: computed(() => {
        return table.rows.length;
      }),
      sortable: {
        order: "id",
        sort: "asc",
      },
    });
    return {
      searchTerm,
      table,
    };
  },
};
</script>