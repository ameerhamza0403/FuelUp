import React, {Component} from 'react';
import {Text, View, Dimensions, StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../Component';
import Theme from '../../constants/Theme';
const {width, height} = Dimensions.get('screen');
export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <Header />
        <StatusBar
          backgroundColor={Theme.COLORS.FUELPINK}
          barStyle="light-content"
        />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingVertical: 10,
          }}>
          {'Fuel Up LLC Privacy'.toUpperCase()}
        </Text>
        <ScrollView>
          <Text
            style={{
              paddingHorizontal: 10,
              textAlign: 'justify',
              fontSize: 25,
              paddingVertical: 30,
            }}>
            Policy Last updated: August 8, 2020
          </Text>
          <Text
            style={{
              paddingHorizontal: 10,
              textAlign: 'justify',
              fontSize: 16,
              marginBottom: width,
            }}>
            Fuel Up LLC,its subsidiaries, affiliates, and related entities
            (collectively, “Fuel Up” or “we”) collects information about you
            when you use our mobile applications, websites, and other online
            products and services (collectively, the “Services”) and through
            other interactions and communications you have with us. Fuel Up is
            committed to protecting our visitors’ and members’ privacy. The
            following Privacy Policy (sometimes referred to herein as “Policy”)
            outlines the information Fuel Up may collect and how we may use that
            information to better serve visitors and members 1. COLLECTION& USE
            OF INFORMATION. We collect information you provide directly to us,
            such as when you create or modify your account, request on-demand
            services, contact customer support, or otherwise communicate with
            us. This information may include: name, email address, phone number,
            postal address, profile picture, payment method including credit
            card numbers along with expiration date and Security Code, Vehicle
            make, model, color, type of gasoline, license plate number, delivery
            notes, order requests and other information you provide. In
            addition, tracking information is collected as you navigate through
            our website, mobile applications or use the Services, including, but
            not limited to, geographic areas (most GPS enabled mobile devices
            can define one’s location to within 50 feet), device type, and
            device unique identifier.You may also choose to upload a photo while
            using the application, if you wish to do so this may be viewable by
            the drivers who are delivering your fuel so that they are able to
            verify your vehicle. You may remove it or update it at anytime by
            logging into your account. If you use our services through your
            mobile device, we will track your geo-location information so that
            you are able to set your vehicle location, and the drivers are able
            to find the location in which you wish to fill up your vehicle. Our
            primary goal in collecting information is to provide you with an
            enhanced experience when using the Service. We will not share this
            information with third parties. We may also use the information we
            collect about you to provide, maintain, and improve our Services,
            including, for example, to facilitate payments, store payment
            information on a secure page, send receipts, provide products and
            services you request (and send related information), develop new
            features, provide customer support, develop safety features,
            authenticate users, and send product updates and administrative
            messages; perform internal operations, including, for example, to
            prevent fraud and abuse of our Services; to troubleshoot software
            bugs and operational problems; to conduct data analysis, testing,
            and research; and to monitor and analyze usage and activity trends;
            send or facilitate communications (i) between you and a driver of a
            delivery vehicle, such as estimated times of arrival (ETAs), or (ii)
            between you and a contact of yours at your direction in connection
            with your use of certain features, such as referrals or invites;
            send you communications we think will be of interest to you,
            including information about products, services, promotions, news,
            and events and to process contest, sweepstake, or other promotion
            entries and fulfill any related awards; personalize and improve the
            Services, including to provide or recommend features, content,
            social connections, referrals, and advertisements. To help us serve
            your needs better, we use “cookies” to store and sometimes track
            user information. A cookie is a small amount of data that is sent to
            your browser from a web server and stored on your computer’s hard
            drive. Cookies can be disabled or controlled by setting a preference
            within your web browser. There may, however, be some features of the
            Services that require the use of cookies in order to customize the
            delivery of information to you. The use of third party cookies is
            not covered by our privacy policy. We do not have access or control
            over these cookies. 2. SOCIAL SHARING FEATURES The Services may
            integrate with social sharing features and other related tools which
            let you share actions you take on our Services with other
            applications, sites, or media, and vice versa. Your use of such
            features enables the sharing of information with your friends or the
            public, depending on the settings you establish with the social
            sharing service. Please refer to the privacy policies of those
            social sharing services for more information about how they handle
            the data you provide to or share through them. 3. SERVICE
            ANNOUNCEMENTS We may send you service-related announcements when it
            is necessary to do so. Generally, you may not opt-out of these
            communications, which are not promotional in nature. If you do not
            wish to receive them, you have the option to deactivate your
            account. 4. CUSTOMER SERVICE Based upon the personally identifiable
            information you provide us, we will send you a welcoming email to
            verify your username and password. We will also communicate with you
            in response to your inquiries, to provide the services you request,
            and to manage your account. We will communicate with you by SMS/text
            message, push notification, or email. 5. DISCLOSURE OF INFORMATION
            We do not sell, share, rent or trade your personal information or
            geo-location information other than as disclosed within this privacy
            policy. Fuel Up may share aggregated information that includes
            non-identifying information and log data with third parties for
            industry analysis, demographic profiling and to deliver targeted
            advertising about other products and services. We may employ third
            party companies and individuals to facilitate our Service, to
            provide the Services on our behalf, to process payment, provide
            customer support, provide geo-location information to the drivers,
            to perform website and application-related services (e.g., without
            limitation, maintenance services, database management, web analytics
            and improvement of the website’s and application’s features) or to
            assist us in analyzing how our website and Services are used. These
            third parties have access to your personal information only to
            perform these tasks on our behalf and are obligated not to disclose
            or use it for any other purpose. We may also provide personal
            information to our business partners or other trusted entities for
            the purpose of providing you with information on goods or services
            we believe will be of interest to you. You can, at any time, opt out
            of receiving such communications by contacting those third parties
            directly. Fuel Up cooperates with government and law enforcement
            officials and private parties to enforce and comply with the law. We
            will disclose any information about you to government or law
            enforcement officials or private parties as we, in our sole
            discretion, believe necessary or appropriate to respond to claims
            and legal process (including but not limited to subpoenas), to
            protect the property and rights of Fuel Up or a third party, to
            protect the safety of the public or any person, or to prevent or
            stop activity we may consider to be, or to pose a risk of being, an
            illegal, unethical or legally actionable activity. If we are
            involved in a merger, acquisition, or sale of the Services, you will
            be notified via email and/or a prominent notice on our web site of
            any change in ownership or uses of your personal information, as
            well as any choices you may have regarding your personal
            information. We use a third party hosting provider who hosts our
            support section of the site. Information collected within this
            section of the site is governed by our privacy policy. Our third
            party service provider does not have access to this information. 6.
            YOUR CHOICES. You may correct or cancel your account information at
            any time by logging into your account. Please note that in some
            cases we may retain certain information about you as required by
            law, or for legitimate business purposes to the extent permitted by
            law. For instance, if you have a standing credit or debt on your
            account, or if we believe you have committed fraud or violated our
            Terms of Use, we may seek to resolve the issue before deleting your
            information. We will comply with individual’s requests regarding
            access, correction, and/or deletion of the personal data stored, in
            accordance with applicable law. We request permission for our
            application’s collection of precise location from your device per
            the permission system used by your mobile operating system. If you
            initially permit the collection of this information, you can later
            disable it by changing the location settings on your mobile device.
            However, this will limit your ability to use certain features of our
            Services, including, but not limited to, limiting your ability to
            order fuel for delivery. We may also seek permission for our
            application’s collection and syncing of contact information from
            your device per the permission system used by your mobile operating
            system. If you initially permit the collection of this information,
            iOS users can later disable it by changing the contacts settings on
            your mobile device. To the best of our knowledge, the Android
            platform does not provide such a setting. You may opt out of
            receiving promotional messages from us by following the instructions
            in those messages. If you opt out, we may still send you
            non-promotional communications, such as those about your account,
            about Services you have requested, or our ongoing business
            relations. We do not provide services or sell products to children.
            If you are below the age of 18, you may use the Services only with
            the permission and active involvement of a parent or legal guardian.
            If you are a minor, please do not provide us with any personal
            information. 8. USER NAMES AND PASSWORDS. Your access to parts of
            our website or mobile application may be protected by a user name
            and a password. Do not give your password to anyone. If you enter a
            section of our website or application that requires a password, you
            should log out when you leave. As a safety precaution, you should
            also close out of your web browser completely and re-open it before
            viewing other parts of the Internet. 9. SECURITY The personally
            identifiable and geo-location information we collect is securely
            stored within our database, and we use standard, industry-wide,
            commercially reasonable security practices such as encryption,
            firewalls and SSL (Secure Socket Layers) for protecting your
            information (credit card number and geo-location information).
            However, as effective as encryption technology is, no security
            system is impenetrable. We cannot guarantee the security of our
            database, nor can we guarantee that information you supply won’t be
            intercepted while being transmitted to us over the Internet, and any
            information you transmit to Fuel Up you do at your own risk. We
            recommend that you not disclose your password to anyone. 10. POLICY
            IS PART OF TERMS OF USE Our privacy policy is part of, and subject
            to, our Terms of Use. You may view these Terms of Use on our
            website. 11. CHANGES TO THIS POLICY. We may change this Policy from
            time to time. If we make significant changes in the way we treat
            your personal information, or to the Policy, we will provide you
            notice through the Services or by some other means, such as SMS/text
            message or email. Your continued use of the Services after such
            notice constitutes your consent to the changes. We encourage you to
            periodically review the Policy for the latest information on our
            privacy practices. 12. Contact Fuel Up. For questions regarding this
            Policy, contact Fuel Up at info@fuelupmd.net, or at Fuel Up
            Services, LLC,1600 Winford Road, Baltimore, MD, 21239. [2:43 PM,
            8/8/2020] Ameer: Refund policy [3:16 PM, 8/8/2020] Kadeem Fiverr
            Fuel Up: Fuel Up LLC Terms of Use These Terms of Use (“Terms”)
            govern your access or use of applications, websites, content,
            products, and services (the “Services”) made available by Fuel Up
            LLC,its subsidiaries, affiliates, and related entities
            (collectively, “Fuel Up”). Please read the following Terms of Use
            carefully before accessing and/or using the Services. 1.
            APPLICABILITY & ACCEPTANCE OF THESE TERMS OF USE. Your access and
            use of the Services constitutes your agreement to be bound by these
            Terms, which establishes a legally binding agreement between you and
            Fuel Up. If you do not agree to these Terms, you may not access or
            use the Services. Fuel Up reserves the right, in our sole and
            absolute discretion, at any time, for any reason whatsoever, with or
            without notice, to terminate, suspend, amend, or modify the Services
            and/or the Terms related to the Services, which will be effective
            upon the posting of such updated Terms by Fuel Up on the Fuel Up
            application. Your continued access or use of the Services after such
            posting constitutes your consent to be bound by the Terms, as
            amended. Fuel Up may immediately terminate these Terms or any
            Services with respect to you, or generally cease offering or deny
            access to the Services or any portion thereof, at any time for any
            reason. Fuel Up collection and use of personal information in
            connection with the Services is as provided in the Privacy Policy
            located on Fuel Up application under privacy policy. In these Terms,
            the words “including” and “include” mean “including, but not limited
            to.” 2. THE SERVICES. The Services constitute a technology platform
            that enables users of Fuel Up’s mobile applications provided as part
            of the Services (the “Applications”, and each, an “Application”) to
            arrange, schedule, and pay for fuel,and the delivery of fuel, for
            passenger motor vehicles, which may be provided by Fuel Up or third
            party providers of such Services, including independent third party
            providers and third party logistics providers under agreement with
            Fuel Up or certain of Fuel Up’s affiliates (“Third Party
            Providers”). The Services are solely for your personal,
            noncommercial use. 3. USER LICENSE. Subject to your compliance with
            these Terms, Fuel Up grants you a limited, revocable, non-exclusive,
            non-transferrable, non-sublicensable, license to: (i) access and use
            the Applications on your personal device solely in connection with
            your use of the Services; and (ii) access and use any content,
            information and related materials that may be made available through
            the Services, in each case solely for your personal, noncommercial
            use. Any rights not expressly granted herein are reserved by Fuel
            Up. You may not: (i) remove any copyright, trademark or other
            proprietary notices from any portion of the Services; (ii)
            reproduce, modify, prepare derivative works based upon, distribute,
            license, lease, sell, resell, transfer, publicly display, publicly
            perform, transmit, stream, broadcast or otherwise exploit the
            Services except as expressly permitted by Fuel Up; (iii) decompile,
            reverse engineer or disassemble the Services except as may be
            permitted by applicable law; (iv) link to, mirror or frame any
            portion of the Services; (v) cause or launch any programs or scripts
            for the purpose of scraping, indexing, surveying, or otherwise data
            mining any portion of the Services or unduly burdening or hindering
            the operation and/or functionality of any aspect of the Services; or
            (vi) attempt to gain unauthorized access to or impair any aspect of
            the Services or its related systems or networks. At times, the
            Applications may allow you and others to post, transmit, display,
            publish, distribute, or otherwise submit public user generated
            material including, but not limited to, reviews of the Services (the
            “Submissions”). You hereby grant Fuel Up royalty-free, irrevocable,
            worldwide, perpetual, non-exclusive right and license to use, copy,
            modify, display, archive, store, publish, transmit, perform,
            distribute, reproduce and create derivative works from all
            Submissions you provide to Fuel Up in any form, media, software or
            technology of any kind now existing or developed in the future.
            Without limiting the generality of the previous sentence, you
            authorize Fuel Up to include the Submissions you provide in a
            searchable format that may be accessed by users of the Services. You
            also grant Fuel Up the right to use any Personally Identifiable
            Information (as that term is defined in Fuel Up’s Privacy Policy)
            included with any Submission in connection with the use,
            reproduction or distribution of such Submission and Fuel Up’s
            provision of Services to you. You also grant Fuel Up the right to
            use the Submission and any facts, ideas, concepts, know-how or
            techniques (“Information”) contained in any Submission or
            communication you send to Fuel Up for any purpose whatsoever,
            including but not limited to, developing, manufacturing, promoting
            and/or marketing products and services. You grant all rights
            described in this paragraph in consideration of your use of the
            Services, without compensation of any sort to you. 4. USER ACCOUNT
            Use of the Services mayrequire that you register and/or create an
            account (“Account”). To register and create an Account, you must
            select an account designation and password and provide certain
            personal information. In consideration of the use of the Services
            provided by Fuel Up, you agree to: (a) provide true, accurate,
            current and complete information about yourself as prompted by the
            registration form, (b) maintain and promptly update the personal
            information you provide to keep it true, accurate, current and
            complete, and c) provide and maintain at least one valid payment
            method (i.e., credit card). If you provide any information that is
            untrue, inaccurate, not current or incomplete, or Fuel Up has
            reasonable grounds to suspect that such information is untrue,
            inaccurate, not current or incomplete, Fuel Up has the right to
            refuse any and all current or future use of the Services (or any
            portion thereof).By creating an Account, you agree that Fuel Up may
            send you informational text (SMS) messages as part of the business
            operation of Fuel Up and/or of your use of the Services. You are
            responsible for maintaining the confidentiality and security of your
            Account and password, and you are fully responsible for all
            activities that occur under your password or Account, and for any
            other actions taken in connection with the Account or password. You
            agree to (a) immediately notify Fuel Up of any known or suspected
            unauthorized use(s) of your password or Account, or any known or
            suspected breach of security, including loss, theft, or unauthorized
            disclosure of your password or credit card information; and (b)
            ensure that you exit from your Account at the end of each session.
            Fuel Up will not be liable for any injury, loss or damage of any
            kind arising from or relating to your failure to comply with (a) and
            (b) or for any acts or omissions by you or someone else using your
            Account and/or password.You must be at least 18 years of age, or the
            age of legal majority in your jurisdiction (if different than 18),
            to obtain an Account. 5. PAYMENT FOR SERVICES. You understand,
            acknowledge, and agree that use of the Services will result in
            charges to you (“Charges”). Charges paid by you are final and
            non-refundable, unless otherwise determined by Fuel Up. All Charges
            are due immediately and payment will be facilitated by Fuel Up using
            the payment method designated in your Account. If your payment
            method is determined to be expired, invalid or otherwise not able to
            be charged, you agree that Fuel Up may use a secondary payment
            method in your Account, if available. Fuel Up, in our sole and
            absolute discretion, at any time, for any reason whatsoever, with or
            without notice, reserves the right to establish, modify, amend,
            change, remove and/or revise Charges for any or all Services. Fuel
            Up will use reasonable efforts to inform you of Charges that may
            apply, provided that you will be responsible for Charges incurred
            under your Account regardless of your awareness of such Charges or
            the amounts thereof. Fuel Up may from time to time provide certain
            users with promotional offers and discounts that may result in
            different amounts charged for the same or similar services or goods
            obtained through the use of the Services, and you agree that such
            promotional offers and discounts, unless also made available to you,
            shall have no bearing on your use of the Services or the Charges
            applied to you. You may elect to cancel your request for Services at
            any time prior to the dispatch of a delivery vehicle, in which case
            you will incur Charges.  In the event that a delivery vehicle is
            unable to fill your vehicle with fuel for any reason outside of Fuel
            Up’s control, including but not limited to, your vehicle not being
            in the location designated via the Application, your vehicle’s gas
            tank door(s) being locked and/or inaccessible for any reason, Fuel
            Up will attempt to contact you by and through the Application;
            should the delivery vehicle remain unable to fill your vehicle with
            fuel within five (5) minutes of the delivery vehicle’s arrival at
            the location designated via the Application, you will incur
            Charges.  The current minimum charge is a “delivery fee” of $5.00
            and a $1.30 “service fee” that may change, which you will incur
            regardless of any promotional offers and/or discounts to which you
            may have previously been eligible. You agree to indemnify and hold
            Fuel Up and its officers, directors, employees, and agents harmless
            from any and all claims, demands, losses, liabilities, and expenses
            (including attorneys’ fees), arising out of or in connection with:
            (i) your use of the Services; (ii) your breach or violation of any
            of these Terms; (iii) Fuel Up’s use of your Submissions or Account
            data; or (iv) your violation of the rights of any third party
            through your use of the Services. THE INFORMATION, CONTENT,
            PRODUCTS, SERVICES, AND MATERIALS AVAILABLE THROUGH THE APPLICATIONS
            AND/OR SERVICES (WHETHER PROVIDED BY FUEL UP, OR A THIRD PARTY, ARE
            PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND,
            EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW,
            FUEL UP DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, FREEDOM
            FROM COMPUTER VIRUS, AND IMPLIED WARRANTIES ARISING FROM COURSE OF
            DEALING OR COURSE OF PERFORMANCE.  IN ADDITION, FUEL UP MAKES NO
            REPRESENTATION, WARRANTY, OR GUARANTEE REGARDING THE RELIABILITY,
            TIMELINESS, QUALITY, SUITABILITY, OR AVAILABILITY OF THE SERVICES OR
            ANY SERVICES REQUESTED THROUGH THE USE OF THE SERVICES.  TO THE
            MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, YOU AGREE THAT THE
            ENTIRE RISK ARISING OUT OF YOUR USE OF THE SERVICES, AND ANY SERVICE
            REQUESTED IN CONNECTION THEREWITH, REMAINS SOLELY WITH YOU. 8.
            LIMITATION OF LIABILITY. IN NO EVENT SHALL FUEL UP BE LIABLE TO YOU
            FOR ANY DIRECT, INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL, EXEMPLARY
            OR CONSEQUENTIAL DAMAGES, OR ANY LOSS OR DAMAGES WHATSOEVER,
            INCLUDING LOST DATA, LOST PROFITS, PROPERTY DAMAGE, OR PERSONAL
            INJURY (EVEN IF FUEL UP HAS BEEN PREVIOUSLY ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES), WHETHER IN AN ACTION UNDER CONTRACT,
            NEGLIGENCE, OR ANY OTHER THEORY, IN ANY MANNER ARISING OUT OF OR IN
            CONNECTION WITH THE SERVICES. FUEL UP ASSUMES NO RESPONSIBILITY AND
            SHALL NOT BE LIABLE FOR ANY DAMAGES TO, OR VIRUSES THAT MAY INFECT,
            YOUR COMPUTER EQUIPMENT OR OTHER PROPERTY ON ACCOUNT OF YOUR ACCESS
            TO, USE OF, BROWSING OF, OR DOWNLOADING OF ANY MATERIAL FROM THE
            APPLICATIONS. FUEL UP ASSUMES NO RESPONSIBILITY OR LIABILITY IN ANY
            MANNER ARISING OUT OF OR IN CONNECTION WITH ANY INFORMATION,
            CONTENT, PRODUCTS, fuel, the delivery of fuel, THE SPILLAGE OF ANY
            FUEL BEFORE, DURING, OR AFTER THE DELIVERY OF FUEL TO YOU,YOUR USE
            OF OR RELIANCE ON THE SERVICES OR YOUR INABILITY TO ACCESS OR USE
            THE SERVICES, DELAY OR FAILURE IN PERFORMANCE OF THE SERVICES, OR
            MATERIAL AVAILABLE ON OR THROUGH THE APPLICATIONS, AS WELL AS ANY
            THIRD PARTY WEBSITE PAGES OR ADDITIONAL WEBSITES LINKED TO VIA THE
            APPLICATIONS, FOR ANY ERROR, DEFAMATION, LIBEL, SLANDER, OMISSION,
            FALSEHOOD, OBSCENITY, PORNOGRAPHY, PROFANITY, DANGER, INACCURACY
            CONTAINED THEREIN OR HARM TO PERSON OR PROPERTY CAUSED THEREBY. IN
            ADDITION TO THE FOREGOING, YOU SPECIFICALLY AGREE THAT FUEL UP WILL
            NOT BE LIABLE TO YOU FOR ANY DAMAGE(S) INCURRED AS A RESULT OF,
            INCLUDING, BUT NOT LIMITED TO: YOU LEAVING YOUR VEHICLE DOOR(S)
            AND/OR GAS TANK DOOR(S) UNLOCKED AND/OR OPEN, THIRD PARTY ACCESS TO
            ANY AREA WITHIN WHICH YOUR VEHICLE IS LOCATED REGARDLESS IF YOU
            PROVIDED US WITH KEYCARD(S), PIN(S), PASSCODE(S) AND/OR KEY(S) TO
            ACCESS THAT AREA, AND THE SIPHONING AND/OR ATTEMPTED SIPHONING OF
            FUEL FROM YOUR VEHICLE BY ANY THIRD PARTY.  THESE LIMITATIONS SHALL
            APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY
            LIMITED REMEDY. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE
            EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL
            DAMAGES, THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. IN NO EVENT
            SHALL FIEL UP’S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES AND
            CAUSES OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING BUT NOT
            LIMITED TO, NEGLIGENCE) OR OTHERWISE, FOR ALL SERVICES PROVIDED BY
            FUEL UP EXCEED THE AMOUNT PAID BY YOU TO FUEL UP. YOU AND FUEL UP
            AGREE THAT THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY IN
            THESE TERMS ARE MATERIAL, BARGAINED-FOR BASES OF THESE TERMS, AND
            THAT THEY HAVE BEEN TAKEN INTO ACCOUNT IN DETERMINING THE
            CONSIDERATION TO BE GIVEN BY EACH PARTY UNDER THESE TERMS AND IN THE
            DECISION BY EACH PARTY TO ENTER INTO THESE TERMS. YOU AND FUEL UP
            AGREE THAT THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY IN
            THESE TERMS OF USE ARE FAIR AND REASONABLE.THE WARRANTY DISCLAIMERS
            AND LIMITATIONS OF LIABILITY IN THIS SECTION 8 DO NOT PURPORT TO
            LIMIT LIABILITY OR ALTER YOUR RIGHTS AS A CONSUMER THAT CANNOT BE
            EXCLUDED UNDER APPLICABLE LAW. IF YOU ARE DISSATISFIED WITH THE
            SERVICES OR DO NOT AGREE TO ANY PROVISIONS OF THESE TERMS, YOUR SOLE
            AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SERVICES, EXCEPT AS
            MAY BE PROVIDED FOR IN THIS SECTION 8. 9. DISPUTE RESOLUTION. You
            agree that any dispute, claim or controversy arising out of or
            relating to these Terms or the breach, termination, enforcement,
            interpretation or validity thereof or the use of the Services
            (collectively, “Disputes”) will be settled by binding arbitration
            between you and Fuel up, except that each party retains the right to
            bring an individual action in small claims court and the right to
            seek injunctive or other equitable relief in a court of competent
            jurisdiction to prevent the actual or threatened infringement,
            misappropriation or violation of a party’s copyrights, trademarks,
            trade secrets, patents or other intellectual property rights. The
            arbitration will be administered by the American Arbitration
            Association (“AAA”) in accordance with the Commercial Arbitration
            Rules and the Supplementary Procedures for Consumer Related Disputes
            (the “AAA Rules”) then in effect, except as modified by this
            “Dispute Resolution” section. (The AAA Rules are available
            at www.adr.org/arb_med or by calling the AAA at 1-800-778-7879.) The
            Federal Arbitration Act will govern the interpretation and
            enforcement of this Section. A party who desires to initiate
            arbitration must provide the other party with a written Demand for
            Arbitration as specified in the AAA Rules. The arbitrator will be
            either a retired judge or an attorney licensed to practice law in
            the state of New York and will be selected by the parties from the
            AAA’s roster of consumer dispute arbitrators. If the parties are
            unable to agree upon an arbitrator within seven (7) days of delivery
            of the Demand for Arbitration, then the AAA will appoint the
            arbitrator in accordance with the AAA Rules. Unless otherwise agreed
            between you and Fuel Up, the arbitration will be conducted in the
            State of New York, in the County of New York. If your claim does not
            exceed $5,000, then the arbitration will be conducted solely on the
            basis of documents you and Fuel Up submit to the arbitrator, unless
            you request a hearing or the arbitrator determines that a hearing is
            necessary. If your claim exceeds $5,000, your right to a hearing
            will be determined by the AAA Rules. Subject to the AAA Rules, the
            arbitrator will have the discretion to direct a reasonable exchange
            of information by the parties, consistent with the expedited nature
            of the arbitration. The arbitrator will render an award within the
            time frame specified in the AAA Rules. The arbitrator’s decision
            will include the essential findings and conclusions upon which the
            arbitrator based the award. Judgment on the arbitration award may be
            entered in any court having jurisdiction thereof. The arbitrator’s
            award damages must be consistent with the terms of the “Limitation
            of Liability” section above as to the types and the amounts of
            damages for which a party may be held liable. The arbitrator may
            award declaratory or injunctive relief to the extent necessary to
            provide relief warranted by the claimant’s individual claim. Fuel Up
            hereby waives all rights Fuel Up may have under applicable law to
            recover attorneys’ fees and expenses if Fuel Up prevails in
            arbitration. Not with standing the provisions of the
            modification-related provisions above, if Fuel Up changes this
            “Dispute Resolution” section after the date you first accepted these
            Terms (or accepted any subsequent changes to these Terms), you may
            reject any such change by providing Fuel Up written notice of such
            rejection by email from the email address associated with your
            Account to:info@fuelupmd.net, within 30 days of the date such change
            became effective, as indicated in the “Last update” date above. In
            order to be effective, the notice must include your full name and
            clearly indicate your intent to reject changes to this “Dispute
            Resolution” section. By rejecting changes, you are agreeing that you
            will arbitrate any Dispute between you and Fuel Up in accordance
            with the provisions of this “Dispute Resolution” section as of the
            date you first accepted these Terms (or accepted any subsequent
            changes to these Terms). You acknowledge and agree that you and Fuel
            Up are each waiving the right to a trial by jury or to participate
            as a plaintiff or class in any purported class action or
            representative proceeding. Further, unless both you and Fuel Up
            otherwise agree in writing, the arbitrator may not consolidate more
            than one person’s claims, and may not otherwise preside over any
            form of any class or representative proceeding. If this specific
            paragraph is held unenforceable, then the entirety of this “Dispute
            Resolution” section will be deemed void. Except as provided in the
            preceding sentence, this “Dispute Resolution” section will survive
            any termination of these Terms. 10. APPLICABLE LAW. These Terms are
            governed by and construed in accordance with the laws of the State
            of New York, U.S.A., without giving effect to any conflict of law
            principles. Fuel Up may give notice by means of a general notice on
            the Services, electronic mail to your email address in your Account,
            or by written communication sent by first class mail or pre-paid
            post to your address in your Account. Such notice shall be deemed to
            have been given upon the expiration of 48 hours after mailing or
            posting (if sent by first class mail or pre-paid post) or 12 hours
            after sending (if sent by email). You may give notice to Fuel Up,
            with such notice deemed given when received by Fuel Up, at any time
            by first class mail or pre-paid post to Fuel Up Services, LLC, Attn:
            User Notices – Legal, 1600 Winford Road, Baltimore, MD, 21239. Fuel
            Up may assign these Terms without your consent to: (i) a subsidiary
            or affiliate; (ii) an acquirer of Fuel Up’s equity, business or
            assets; or (iii) a successor by merger. If any portion of these
            Terms is found to be void, invalid or otherwise unenforceable, then
            that portion shall be deemed to be superseded by a valid,
            enforceable provision that matches the intent of the original
            provision as closely as possible. The remainder of these Terms shall
            continue to be enforceable and valid according to terms contained
            herein. 14. ENTIRE AGREEMENT. These Terms, which hereby incorporate
            by reference the terms of Fuel Up’s Privacy Policy, constitute the
            entire agreement between you and Fuel Up, superseding all prior
            agreements regarding the Applications and/or Services. 15. NO
            WAIVER. The failure of Fuel Up to exercise or enforce any right or
            provision of the Terms shall not constitute a waiver of said right
            or provision. Neither party hereto shall be deemed to be in default
            of any provision of the Terms or for failure in performance
            resulting from acts or events beyond the reasonable control of such
            party and arising without its fault or negligence, including, but
            not be limited to, acts of God, civil or military authority,
            interruption of electric or telecommunication services, civil
            disturbances, acts of war or terrorists, strikes, fires, floods or
            other catastrophes. 16. Headings & Construction. The section titles
            in the Terms are for your convenience only and carry no contractual
            or legal effect whatsoever. The language in these Terms shall be
            interpreted in accordance with its fair meaning and shall not be
            strictly interpreted for or against either party. 17. Contact Fuel
            Up. For questions regarding these Terms, contact Fuel Up at
            info@fuelupmd.net, or at Fuel Up Services, LLC, 1600 Winford Road,
            Baltimore, MD, 21239. Copyright ©️ 2020 Fuel Up, LLC. All Rights
            Reserved.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
