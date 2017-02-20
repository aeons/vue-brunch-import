<template>
  <span>Hello {{ greeting }}!</span>
</template>

<script>
  import axios from 'axios';

  module.exports = {
    data: function () {
      return {
        greeting: 'World'
      };
    }
  }
</script>
