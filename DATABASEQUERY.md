### 문제 1번: 테이블 생성하기
1. `crew_id`, `nickname`이 중복 데이터이다.
2. `crew` 테이블에는 `크루 식별 정보`, `닉네임`으로 구성할 수 있다.
3. `crew` 테이블에 들어갈 정보 추출하기
```sql
SELECT DISTINCT crew_id, nickname
FROM attedance;
```
4. crew 테이블 생성
```sql
CREATE TABLE crew (
  crew_id INT NOT NULL AUTO_INCREMENT,
  nickname VARCHAR(50) NOT NULL,
    PRIMARY KEY (crew_id)
);
```
5. attendance 테이블에서 크루 정보 추출해서 crew 테이블에 삽입
```sql
INSERT INTO crew (crew_id, nickname)
SELECT DISTINCT crew_id, nickname FROM attendance;

mysql> SELECT * FROM crew;
+---------+-----------+
| crew_id | nickname  |
+---------+-----------+
|       1 | 검프       |
|       2 | 구구       |
|       3 | 네오       |
|       4 | 브라운      |
|       5 | 브리       |
|       6 | 포비       |
|       7 | 워니       |
|       8 | 리사       |
|       9 | 제임스      | 
|      10 | 류시       |
|      11 | 디노       |
|      12 | 시지프      |
+---------+-----------+
```
### 문제 2: 테이블 컬럼 삭제하기
1. attedance 테이블에 불필요한 컬럼은 무엇인가?
crew 테이블에 nickname 정보를 가지고 있으니, nickname 칼럼이 불필요해진 상황이다.
2. 삭제 하는 SQL
```sql
ALTER TABLE attendance DROP COLUMN nickname;

mysql> SELECT * FROM attendance;
+---------------+---------+-----------------+------------+----------+
| attendance_id | crew_id | attendance_date | start_time | end_time |
+---------------+---------+-----------------+------------+----------+
|             1 |       1 | 2025-03-04      | 09:45:00   | 18:10:00 |
|             2 |       1 | 2025-03-05      | 09:50:00   | 18:05:00 |
|             3 |       1 | 2025-03-06      | 09:59:00   | 18:02:00 |
|             4 |       1 | 2025-03-07      | 10:00:00   | 18:05:00 |
|             5 |       1 | 2025-03-10      | 12:55:00   | 18:10:00 |
|             6 |       1 | 2025-03-11      | 09:58:00   | 18:03:00 |
|             7 |       1 | 2025-03-12      | 09:55:00   | 18:05:00 |
|             8 |       2 | 2025-03-04      | 10:01:00   | 18:01:00 |
|             9 |       2 | 2025-03-05      | 09:59:00   | 18:00:00 |
|            10 |       2 | 2025-03-06      | 09:58:00   | 17:30:00 |
|            11 |       2 | 2025-03-07      | 10:10:00   | 18:00:00 |
|            12 |       2 | 2025-03-11      | 09:59:00   | 18:01:00 |
|            13 |       2 | 2025-03-12      | 10:02:00   | 18:10:00 |
|            14 |       3 | 2025-03-04      | 09:59:00   | 18:00:00 |
|            15 |       3 | 2025-03-05      | 10:03:00   | 18:15:00 |
|            16 |       3 | 2025-03-07      | 10:00:00   | 17:50:00 |
|            17 |       3 | 2025-03-10      | 13:05:00   | 18:10:00 |
|            18 |       3 | 2025-03-12      | 09:55:00   | 18:00:00 |
|            19 |       4 | 2025-03-04      | 09:59:00   | 18:00:00 |
|            20 |       4 | 2025-03-05      | 09:59:00   | 18:00:00 |
|            21 |       4 | 2025-03-06      | 10:00:00   | 18:00:00 |
|            22 |       4 | 2025-03-07      | 10:00:00   | 18:00:00 |
|            23 |       4 | 2025-03-10      | 13:00:00   | 18:00:00 |
|            24 |       4 | 2025-03-11      | 09:59:00   | 18:00:00 |
|            25 |       4 | 2025-03-12      | 09:59:00   | 18:00:00 |
|            26 |       5 | 2025-03-04      | 10:20:00   | 18:10:00 |
|            27 |       5 | 2025-03-05      | 09:58:00   | 18:02:00 |
|            28 |       5 | 2025-03-06      | 09:59:00   | 18:00:00 |
|            29 |       5 | 2025-03-07      | 10:02:00   | 18:00:00 |
|            30 |       5 | 2025-03-11      | 09:55:00   | 18:00:00 |
|            31 |       5 | 2025-03-12      | 09:57:00   | 18:05:00 |
|            32 |       6 | 2025-03-04      | 10:15:00   | 17:58:00 |
|            33 |       6 | 2025-03-05      | 10:05:00   | 18:05:00 |
|            34 |       6 | 2025-03-10      | 13:10:00   | 18:10:00 |
|            35 |       6 | 2025-03-11      | 09:52:00   | 18:01:00 |
|            36 |       6 | 2025-03-12      | 09:59:00   | 18:00:00 |
|            37 |       7 | 2025-03-04      | 10:10:00   | 18:10:00 |
|            38 |       7 | 2025-03-05      | 09:50:00   | 18:02:00 |
|            39 |       7 | 2025-03-10      | 12:59:00   | 18:05:00 |
|            40 |       7 | 2025-03-12      | 10:05:00   | 17:00:00 |
|            41 |       8 | 2025-03-04      | 09:55:00   | 18:00:00 |
|            42 |       8 | 2025-03-05      | 10:01:00   | 18:03:00 |
|            43 |       8 | 2025-03-06      | 10:10:00   | 17:40:00 |
|            44 |       8 | 2025-03-07      | 10:02:00   | 18:05:00 |
|            45 |       8 | 2025-03-10      | 13:02:00   | 18:00:00 |
|            46 |       8 | 2025-03-11      | 10:05:00   | 18:10:00 |
|            47 |       8 | 2025-03-12      | 10:03:00   | 18:00:00 |
|            48 |       9 | 2025-03-04      | 09:55:00   | 18:00:00 |
|            49 |       9 | 2025-03-05      | 09:59:00   | 18:00:00 |
|            50 |       9 | 2025-03-06      | 09:59:00   | 18:10:00 |
|            51 |       9 | 2025-03-07      | 10:05:00   | 18:00:00 |
|            52 |       9 | 2025-03-10      | 12:59:00   | 17:50:00 |
|            53 |       9 | 2025-03-11      | 09:55:00   | 18:00:00 |
|            54 |       9 | 2025-03-12      | 10:01:00   | 18:00:00 |
|            55 |      10 | 2025-03-04      | 10:04:00   | 18:00:00 |
|            56 |      10 | 2025-03-05      | 10:02:00   | 18:02:00 |
|            57 |      10 | 2025-03-06      | 09:45:00   | 18:05:00 |
|            58 |      10 | 2025-03-07      | 10:10:00   | 18:00:00 |
|            59 |      10 | 2025-03-10      | 13:03:00   | 17:40:00 |
|            60 |      10 | 2025-03-11      | 09:57:00   | 18:10:00 |
|            61 |      10 | 2025-03-12      | 09:59:00   | 17:30:00 |
|            62 |      11 | 2025-03-04      | 09:59:00   | 18:00:00 |
|            63 |      11 | 2025-03-05      | 10:10:00   | 18:00:00 |
|            64 |      11 | 2025-03-06      | 09:57:00   | 18:05:00 |
|            65 |      11 | 2025-03-07      | 10:00:00   | 18:03:00 |
|            66 |      11 | 2025-03-10      | 12:57:00   | 18:00:00 |
|            67 |      11 | 2025-03-11      | 09:55:00   | 18:00:00 |
|            68 |      11 | 2025-03-12      | 10:03:00   | 18:05:00 |
|            69 |      12 | 2025-03-04      | 09:52:00   | 18:05:00 |
|            70 |      12 | 2025-03-05      | 09:55:00   | 18:00:00 |
|            71 |      12 | 2025-03-06      | 10:15:00   | 18:00:00 |
|            72 |      12 | 2025-03-07      | 10:03:00   | 17:59:00 |
|            73 |      12 | 2025-03-10      | 12:58:00   | 18:10:00 |
|            74 |      12 | 2025-03-11      | 09:55:00   | 18:00:00 |
|            75 |      12 | 2025-03-12      | 10:10:00   | 18:10:00 |
+---------------+---------+-----------------+------------+----------+
```

### 문제 3: 외래키 설정하기
만약 `crew` 테이블에는 `crew_id`가 `12`번인 크루가 존재하지 않지만, `attendance` 테이블에는 여전히 12번 크루가 존재한다면?
attendance 데이터를 보고 해당 데이터가 어떤 크루의 데이터인지 판단하기 어렵다.
```sql
ALTER TABLE attendance
ADD CONSTRAINT fk_attendance_crew
FOREIGN KEY (crew_id)
REFERENCES crew(crew_id);
```

### 문제 4: 유니크 키 설정
크루 이름이 중복 금지라는 요구사항이 생겼다. 현재 테이블에는 중복된 닉네임이 저장 가능하다. crew 테이블의 결함을 유니크 키를 활용해 해결할 수 있다.
```sql
ALTER TABLE crew
ADD CONSTRAINT unique_crew_nickname
UNIQUE crew(nickname);
```

### 문제 5: 크루 닉네임 검색하기(LIKE)
닉네임 첫 글자가 `디`인 크루를 검색하고 싶다.
```sql
SELECT * FROM crew WHERE nickname LIKE '디%';

mysql> SELECT * FROM crew WHERE nickname LIKE '디%';
+---------+----------+
| crew_id | nickname |
+---------+----------+
|      11 | 디노      |
+---------+----------+
```

### 문제 6: 출석 기록 확인하기
```sql
SELECT * FROM attendance a
JOIN crew c ON a.crew_id = c.crew_id
WHERE nickname = '어셔'
AND a.attendance_date = '2026-03-06';
```

### 문제 7: 누락된 출석 기록 추가
```sql
INSERT INTO crew (nickname) 
VALUES ('어셔');
INSERT INTO attendance(crew_id, attendance_date, start_time, end_time) 
VALUES ('13', '2026-03-06', '09:31', '18:01');

INSERT INTO attendance (crew_id, attendance_date, start_time, end_time)
SELECT crew_id, '2026-03-06', '09:31', '18:01'
FROM crew
WHERE nickname = '어셔';
```

### 문제 8: 잘못된 출석 기록 수정
```sql
UPDATE attendance
SET start_date = '10:05'
WHERE crew_id = (SELECT crew_id FROM crew WHERE nickname = '주니')
AND attendance_date = '2026-03-06';
```

### 문제 9: 허위 출석 기록 삭제
```sql
DELETE FROM attendance
WHERE attendance_date = '2026-03-12'
AND crew_id IN (SELECT crew_id 
               FROM crew
               WHERE nickname = '아론');
```

### 문제 10: 출석 정보 조회하기
crew 테이블에서 crew_id를 기준으로 nickname 필드 값을 가져와서 조회하기
```sql
SELECT a.crew_id, c.nickname, a.attendance_date
FROM attendance a 
JOIN crew c ON a.crew_id = c.crew_id;
```

### 문제 11: nickname으로 쿼리 처리하기
nickname을 입력하면 이를 기준으로 쿼리문도 처리할 수 있지 않을까?
```sql
SELECT * 
FROM attendance
WHERE crew_id IN (SELECT crew_id
                  FROM crew
                  WHERE crew_id = 1);
```

### 문제 12: 가장 늦게 하교한 크루 찾기
3월 5일 가장 늦게 하교한 크루를 찾아보자
```sql
SELECT c.nickname
FROM attendance a
JOIN crew c ON a.crew_id = c.crew_id 
WHERE MONTH(attendance_date) = 3 
    AND DAY(attendance_date) = 5
ORDER BY end_time DESC
LIMIT 1
    
SELECT c.nickname
FROM attendance a, crew c
WHERE (a.crew_id = c.crew_id)
AND MONTH(attendance_date) = 3 AND DAY(attendance_date) = 5
ORDER BY a.end_time DESC
LIMIT 1;

SELECT nickname 
FROM crew
WHERE crew_id = (SELECT crew_id 
                 FROM attendance 
                 WHERE MONTH(attendance_date) = 3 
                    AND DAY(attendance_date) = 5 
                ORDER BY end_time DESC
                LIMIT 1);
```

### 문제 13: 크루별로 기록된 날짜 수를 조회하자
그냥 조인을 하게 되면 기록이 없는 크루는 조회가 되지 않는다. LEFT JOIN을 사용해서 기록이 0인 크루도 조인되도록 하면 된다.
```sql
SELECT c.nickname, count(DISTINCT a.attendance_date) AS "날짜 수"
FROM crew c
LEFT JOIN attendance a ON c.crew_id = a.crew_id
GROUP BY a.crew_id, c.nickname;
```

### 문제 14: 크루별로 등교 기록이 있는 날짜 수 조회
```sql
# 이 경우는 조인되고 where문으로 걸러서 0인 경우를 조회 못함 
SELECT c.nickname, COUNT(DISTINCT a.attendance_date) "등교 일수"
FROM crew c
LEFT JOIN attendance a ON c.crew_id = a.crew_id
WHERE a.start_time IS NOT NULL
GROUP BY c.nickname;

# 날짜 수가 0인 경우도 조회 가능
SELECT c.nickname, COUNT(DISTINCT a.attendance_date) "등교 일수"
FROM crew c
LEFT JOIN attendance a ON c.crew_id = a.crew_id 
    AND a.start_time IS NOT NULL
GROUP BY c.nickname;
```

### 문제 15: 날짜별로 등교한 크루 수 조회
```sql
SELECT attendance_date, COUNT(DISTINCT crew_id) "크루 수"
FROM attendance
GROUP BY attendance_date;
```

### 문제 16: 크루별 가장 빠른 등교 시각과 가장 늦은 등교 시각
```sql
SELECT c.nickname, MIN(a.start_time) "빠른 등교 시각", MAX(a.start_time) "늦은 등교 시각"
FROM attendance a
JOIN crew c ON a.crew_id = c.crew_id
GROUP BY a.crew_id, c.nickname;

SELECT c.nickname,
    (SELECT MIN(start_time) FROM attendance WHERE crew_id = c.crew_id) "빠른 등교 시각",
    (SELECT MAX(start_time) FROM attendance WHERE crew_id = c.crew_id) "늦은 등교 시각"
FROM crew c;
```
