<script setup>
  const callback = (response) => {
    console.log("Response is: ",response);
  }
</script>

<template>
  <GoogleLogin :callback="callback" />
</template>