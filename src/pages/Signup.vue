<template>
  <div>
    <q-card flat bordered>
      <q-card-section>
        <h6 class="text-h6 q-my-sm">
          Sign up
        </h6>
        <p>
          Create a new account to start using Student enrollment app.
        </p>
        <q-form>
          <q-input
            class="q-my-sm"
            filled
            label="First Name"
            lazy-rules
          />
          <q-input
            class="q-my-sm"
            filled
            label="Last Name"
            lazy-rules
          />
          <q-input
            class="q-my-sm"
            filled
            label="Email"
            lazy-rules
          />
          <q-input
            class="q-my-sm"
            label="New Password"
            type="password"
            filled
            lazy-rules
          />
          <q-input
            class="q-my-sm"
            label="Re-type New Password"
            type="password"
            filled
            lazy-rules
          />
          <div class="q-mt-lg">
            <q-btn
              unelevated
              label="Submit"
              type="submit"
              color="primary"
              style="width: 100%;"
              size="md"
            />
          </div>
        </q-form>
        <q-btn
          class="q-mt-lg"
          label="Already have an account? Sign in"
          color="black"
          style="width: 100%;"
          size="md"
          flat
          @click="() => $router.push({ path: '/signin' })"
        />
      </q-card-section>
    </q-card>
  </div>
</template>
