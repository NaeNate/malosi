<script lang="ts">
  export let data
</script>

<h1>Settings</h1>

<form method="POST">
  <p>Calorie Goal</p>
  <input name="calorie" value={data.session.user.calorie} />

  <p>Protein Goal</p>
  <input name="protein" value={data.session.user.protein} />

  <input type="hidden" name="id" value={data.session.user.id} />

  <button>Submit</button>
</form>
