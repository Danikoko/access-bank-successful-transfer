<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ActualContent />
        </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import ActualContent from '@/components/ActualContent.vue';
</script>
  