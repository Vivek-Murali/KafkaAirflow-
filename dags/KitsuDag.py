from sched import scheduler
from airflow import DAG
from datetime import datetime, timedelta
from airflow.operators.bash_operator import BashOperator

default_args = {
    'owner': 'airflow',
    'start_date': datetime(2022,8,10),
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
}

dag = DAG('KitsuDag',default_args=default_args,schedule_interval='@weekly',catchup=False)


t1 = BashOperator(task_id='installation_of_nodejs', bash_command='cd ~/js && npm install',
                    retry_delay=timedelta(seconds=15),dag=dag)

t2 = BashOperator(task_id='extraction_of_data', bash_command='node ~/js/kitsu.js Anime ~/store_files_airflow/anime_sources.json', retries=2,
                    retry_delay=timedelta(seconds=15),dag=dag)

t3 = BashOperator(task_id='Checking_File',bash_command='shasum ~/store_files_airflow/anime_sources.json', retries=1, retry_delay=timedelta(seconds=15),dag=dag)

#t2 = BashOperator(task_id='makeFile',bash_command='ls', dag= dag, retries=1, retry_delay=timedelta(seconds=15))

t1>>t2>>t3