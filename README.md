# Ready2Go
<TBC description>

## Cloud Setup (AWS)
![alt text]([http://url/to/img.png](https://drive.google.com/file/d/11Sjcm6tObikl8q3ekcULsedJaTgLOwOW/view?usp=sharing))

## Entering the RDS database
### via terminal
1. Enter bastion host env (to then enter rds): `ssh -i "RDSKeyPair.pem" ec2-user@ec2-52-77-7-47.ap-southeast-1.compute.amazonaws.com` (note that this assume you already in the directory same as the pem key file)
2. Install dependency: `sudo yum install mysql` (first time)
3. Enter mysql/mariadb env to access rds: `mysql -h ready2go.cqquepqcktso.ap-southeast-1.rds.amazonaws.com -P 3306 -u is458admin -p`
    - you will be prompted to enter your password, which you can find in the telegram group

