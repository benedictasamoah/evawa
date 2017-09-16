 <section id="code-section" class="doc-section" style="padding-top: 60px; position: relative;">
                                <h2 class="section-title pp-c">Initializing Payments</h2>
                                <div id="css" class="section-block">
                                <div class="col-sm-12 col-md-5">
                                                                <div class="section-block">
                                                                <h4 class="pp-c">Create Customer</h4>
                                    <p>
                                     Immediately perform a one-time charge, but by storing it on a customer, the payment method can be used for repeat charges. <br/>Let's create the customer Ama Boakye using your token
                                    </p> 
                                </div><!--//section-block-->
                                <div class="row">
                                    <div class="col-sm-12 col-xs-12" style="min-height: 180px; margin-bottom: 30px; border: solid 1px #eeeeee; 
  -webkit-box-shadow: 1px 1px 1px 1px #ddd;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    1px 1px 1px 1px #ddd;  /* Firefox 3.5 - 3.6 */
  box-shadow:         1px 1px 1px 1px #ddd;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  background: #ffffff;
  border-radius: 5px;
  padding: 0px !important;

">
<div class="col-xs-1 col-sm-1 ventsell-cc" style="height: 180px; color: #ccc; float: left; font-size: 11px; text-align: center; background: #f9f9f9">
<br/>
<span>$</span><br/>
<span>></span><br/>
<span>></span><br/>
<span>></span><br/>
<span>></span><br/>
<span>></span><br/>


            </div>
<div class="col-xs-10 col-sm-11 ventsell-cc" style=" height: 180px; float: left; font-size: 11px;">
<code style="color: #333;">
<br/>
curl <span style="color: #4286f4;">https://api.evawa.com/v01/customers</span> \<br/>
   <span style="color: #068463;"><b>-u</b> pk_test_6pRNASCoBOKtIshFeQ:</span> \<br/>
  <span style="color: #068463;"><b>-d</b> source=nff_tos_6pRNASCoBOKtIshFeQd4XMUh</span> \<br/>
   <span style="color: #068463;"><b>-d</b> description="Ama Boakye"</span> \<br/>
   <span style="color: #068463;"><b>-d</b> email="ama.boakye@example.com"</span><br/>
</code>
            </div></div>
            </div></div>

            <div class="col-sm-12 col-md-5 col-md-offset-1">
                                                                <div class="section-block">
                                                                <h4 class="pp-c">Initiate Charge</h4>
                                    <p>
                                     After securely storing payment information, you can easily charge this customer anytime. <br/><br/>Let's charge Ama Boakye,
                                    </p> 
                                </div><!--//section-block-->
                                <div class="row">
                                    <div class="col-sm-12 col-xs-12" style="min-height: 180px; margin-bottom: 30px; border: solid 1px #eeeeee; 
  -webkit-box-shadow: 1px 1px 1px 1px #ddd;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    1px 1px 1px 1px #ddd;  /* Firefox 3.5 - 3.6 */
  box-shadow:         1px 1px 1px 1px #ddd;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  background: #ffffff;
  border-radius: 5px;
  padding: 0px !important;

">
<div class="col-xs-1 col-sm-1 ventsell-cc" style="height: 180px; color: #ccc; float: left; font-size: 11px; text-align: center; background: #f9f9f9">
<br/>
<span>$</span><br/>
<span>></span><br/>
<span>></span><br/>
<span>></span><br/>
<span>></span><br/>
<span>></span><br/>
            </div>
<div class="col-xs-10 col-sm-11 ventsell-cc" style=" height: 180px; float: left; font-size: 11px;">
<code style="color: #333;">
<br/>
curl <span style="color: #4286f4;">https://api.evawa.com/v01/charges</span> \<br/>
   <span style="color: #068463;"><b>-u</b> pk_test_6pRNASCoBOKtIshFeQ:</span> \<br/>
  <span style="color: #068463;"><b>-d</b> <span style="color:#ce4704;">amount</span><span style="color:#333;">=</span>1000</span> \<br/>
   <span style="color: #068463;"><b>-d</b> <span style="color:#ce4704;">currency</span><span style="color:#333;">=</span>GHS</span> \<br/>
   <span style="color: #068463;"><b>-d</b> <span style="color:#ce4704;">customer</span><span style="color:#333;">=</span>cos_FQ1wAdgRxIKd5v"</span><br/>
</code>
            </div></div>
            </div></div>
                                </div><!--//section-block-->
                            </section><!--//doc-section-->