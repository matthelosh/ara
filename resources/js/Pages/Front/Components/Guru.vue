<template>
    <v-container>
      <v-row>
          <v-col>
              <h3 class="text-h2 black--text text-center font-weight-black">Dewan Guru</h3>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="3" v-for="i in 11" :key="i" class="text-center d-flex justify-center" style="position:relative;">
            <div class="img-box" style="--clr: ">
                <img :src="'/storage/uploads/img/guru/'+i+'.png'" alt="Guru">
            </div>
            <div class="name-box">
                <h4>Nama Guru</h4>
                <small>Jabatan</small>
            </div>
          </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'Guru',
    data: () => ({
        items: [

        ]
    })
}
</script>

<style scoped lang="sass">
    
    .img-box
        width: 200px
        height: 200px
        border-radius: 50%
        overflow: hidden
        position: relative
        box-sizing: border-box
        border: 7px solid purple
        img
            width: 100%
            height: 100%
            object-fit: cover
    .img-box::before
        position: absolute
        content:""
        top: 0
        left: 0
        height: 100%
        width: 100%
        background: #78677700
        border: 10px solid white
        border-radius: 50%
    
    .name-box
        position: absolute
        text-align: center
        width: 200px
        padding: 10px
        box-sizing: border-box
        background: #fefefe
        padding-bottom: 0
        box-shadow: 0 3px 15px rgba(0,0,0,0.3)
        margin: 20px auto
        bottom: -10px
        border-radius: 25px
        font-weight: 600
        color: #333
        h4
            line-height: 10px
        small
            line-height: 10px
            
</style>