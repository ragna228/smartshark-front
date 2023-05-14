<template>
  <div class="footer">
    <div class="footer-texts vert-centered">© 2023 ООО ШАРКСОФТ. All rights reserved.</div>
      <a class="footer-texts vert-centered" href="mailto:llcsharksoft@gmail.com">llcsharksoft@gmail.com</a>
      <a class="footer-texts vert-centered" href="tel:+79687183901">+79687183901</a>
      <div class="vert-centered footer-texts-right">
      <div class="footer-data">ИНН - 7300002178</div>
      <div class="footer-data">ОГРН -1227300005877</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer{
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-top: 3px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.footer-texts{
  margin-left: 30px;
  font-size: 25px;
}
.footer-texts-right{
  margin-right: 30px;
}
.footer-data{
  font-size: 20px;
  margin-bottom: 10px;
}
.footer-data:last-child{
  margin-bottom: 0;
}
@media (max-width: 900px) {
  .footer{
    flex-direction: column;
  }
  .footer-texts{
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 10px;
  }

  .footer-texts-right{
    margin-left: auto;
    text-align: center;
    margin-right: auto;
    margin-top: 20px;
  }
}
</style>