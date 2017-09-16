function fmm(){
var m_name = document.getElementById('m-name').value,
	m_mail = document.getElementById('m-mail').value,
	m_phone = document.getElementById('m-phone').value,
	m_business = document.getElementById('m-business').value,
	m_m = document.getElementById('m-m'),
	eval = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
var pval = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	if(m_name == '' || m_mail == '' || m_phone == '' || m_business == 'null'){
		m_m.innerHTML = '<div class="alert alert-danger"><strong>Error!</strong> All fields required.</div>';
	}
	else if (!eval.test(m_mail))
	{
    	m_m.innerHTML = '<div class="alert alert-danger"><strong>Error!</strong> Incorrect Email.</div>';
	}
	else if (!pval.test(m_phone))
	{
    	m_m.innerHTML = '<div class="alert alert-danger"><strong>Error!</strong> Incorrect Phone Number.</div>';
	}
	else{
		document.getElementById('submm').disabled = 'true';
		m_m.innerHTML = '<div class="alert alert-warning"><strong>Processing...</strong></div>';
		 $.ajax({
                             type: 'POST',
                             url: 'm_pros.php',
                             data: {m_name_o: m_name, m_mail_o: m_mail, m_phone_o: m_phone, m_business_o: m_business},
                          success: function(ventsell_response) {
                            if(ventsell_response != 'failed'){
                            	document.getElementById('submm').disabled = 'false';
                               m_m.innerHTML = '<div class="alert alert-info"><strong>Success...</strong> Thanks for becoming a Evawa Merchant</div>';
                                m_name = '';
                            	m_mail = '';
                            	m_phone = '';
                            	m_business = '';
                            }
                            else{
                            document.getElementById('submm').disabled = 'false';
                          }
                }
        });
		
	}
}