<script setup lang="ts">
    const props = defineProps(['value']);
    const registration = props.value;

    const refresh = () => {
        if (!registration || !registration.waiting) {
            console.log(123)
        } else {
            console.log(456)
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
        
    }
</script>

<template>
    <div class="notify">
        <div class="notify-heading">
            <p>Update</p>
        </div>
        <div class="notify-body">
            <p>Refresher website now !</p>
            <button @click="refresh">Update</button>
        </div>
    </div>
</template>

<style>
.notify {
    background-color: #2bbd98;
    width: 300px;
    padding: 8px;
    border-radius: 4px;
    color: white;
}
button {
    background-color: azure;
    padding: 4px 8px;
    color: #2bbd98;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background-color: aquamarine;
}
</style>