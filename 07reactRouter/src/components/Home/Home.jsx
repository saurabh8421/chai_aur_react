import React from 'react'

function Home() {
  return (
    <div className='items-center flex h-screen'>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-xl items-center flex space-x-4">
  <div class="shrink-0">
    <img class="size-12" src="/img/logo.svg" alt="ChitChat Logo"/>
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
    </div>
  )
}

export default Home
