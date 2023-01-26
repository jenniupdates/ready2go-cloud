# Ready2Go 

## Company 
Ready2Go is a logistics company who  manages delivery for its customers,  consisting of smaller delivery requestors  in the Asia-Pacific region and parts of  North America. Business has been growing  steadily for quite a while.

However, Ready2Go wants to expand to cater for  bigger customers such as huge e-commerce giants  like Shopee who require larger and more frequent  deliveries in both current and EU market.

## Problems of the current Ready2Go website
1. Unable to handle sudden, high influx of  delivery requests
2. Faced security issues such as past DDOS  attacks

## Solution: Ready2Go's revolutionised web application
Ready2Go's security is being enhanced greatly by implementing security features such as AWS WAF, ACM, IAM to protect the web applications and APIs against exploits that consume resources, skew metrics, or cause downtime. There is also a real-time monitoring tool using new relic, that would send notifications to alert Ready2Go’s administrators of any detected downtime, etc from our resources and advising troubleshooting steps to quickly recover from an incident. With high security and high availability, Ready2Go is now ready to launch and expand to the European region with this new application.

## Cloud Setup (AWS)
![Architecture Diagram](https://i.imgur.com/27ZCWMM.png)
    
## Entering the RDS database
### via terminal
1. Enter bastion host env (to then enter rds): `ssh -i "<private key file name>" <ipv4 address>` (note that this assumes you are already in the directory same as the pem key file)
2. Install dependency: `sudo yum install mysql` (for first time)
3. Enter mysql/mariadb env to access rds: `mysql -h <rds endpoint> -P <rds port> -u <rds username> -p`
    - you will be prompted to enter your password

