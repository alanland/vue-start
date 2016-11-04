mai = ->
  buy = $('#J_juValid .J_LinkBuy')
  try
    $('a#J_LinkBuy')[0].click()
    console.log $('a#J_LinkBuy')[0]
  catch e
    e
  try
    $('a.go-btn')[0].click()
    console.log $('a.go-btn')[0]
  catch e
    e
  console.log '1111'

  btns = $('a#J_LinkBuy')
  if $('div.tb-btn-wait') and $('div.tb-btn-wait')[0]
    window.location.reload()
mai()

setInterval mai, 500

