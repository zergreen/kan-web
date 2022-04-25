<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 mt-4 mb-4">
          hello from final table
          <div class="card">
              <h5 class="card-header">Table <i class="bi bi-table" style="color:cornflowerblue;"></i> </h5> 
              <div class="card-body">
                <MyTable></MyTable>
              </div>
          </div>
          </div> 
      </div>
    </div>
  </section>
</template>

<script>
import MyTable from '@/views/MyTable.vue';

export default {
  name: 'FinalTable',
  components: {
    MyTable,
  },
};
</script>

<style scoped>
*{text-align: start;}
section{  background: url("https://wallpapercave.com/wp/wdKx4Ni.jpg") ;}
</style>