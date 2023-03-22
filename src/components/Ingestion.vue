<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-overlay :show="loading" rounded="sm">
      <div class="mt-4 d-flex w-100 justify-content-center">
        <div class="input-label">
          Xlsx file URL:
        </div>
        <div>
          <b-input v-model="fileURL" type="text"></b-input>
        </div>
      </div>
      <div>
        <b-button @click="formatFile(fileURL)" class="mt-4" variant="outline-primary">Format and Analyze</b-button>
      </div>
  </b-overlay>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      fileURL: "",
      externalServiceURL: "https://v2.convertapi.com/convert/xlsx/to/csv?Secret=6mSJbYN6n0hm4GTj&StoreFile=true",
      loading: false
    }
  },
  methods: {
    async formatFile(file) {
      this.loading = true;
      try {
        let response = await axios.post(
          this.externalServiceURL,
          {
            File: file
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
          }
        );
        console.log(response)
        this.loading = false;
        return response.data;
      } catch (err) {
        //
        this.loading = false;
        return err.response;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-label {
  
  margin: auto 20px auto 20px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
