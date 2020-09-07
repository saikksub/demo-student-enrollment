<template>
  <div>
    <q-card flat bordered>
      <q-card-section>
        <h6 class="text-h6 q-my-sm">
          Sign In
        </h6>
        <p>
          Welcome back to the student enrollment application
        </p>
        <q-form>
          <q-input
            filled
            label="Email"
            lazy-rules
          />
          <q-input
            class="q-my-sm"
            label="Password"
            type="password"
            filled
            lazy-rules
          />
          <div class="q-mt-lg">
            <q-btn
              unelevated
              label="Sign in"
              type="submit"
              color="primary"
              style="width: 100%;"
              size="md"
            />
          </div>
        </q-form>
        <q-btn
          class="q-mt-lg"
          label="Create a new account"
          color="black"
          style="width: 100%;"
          size="md"
          flat
          @click="() => $router.push({ path: '/signup' })"
        />
      </q-card-section>
    </q-card>
  </div>
</template>
